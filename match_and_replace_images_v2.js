const fs = require('fs');
const path = require('path');

const catalogPath = 'app/data/catalog.ts';
const sourceDir = '/Users/koldan/Downloads/4-3 формат';
const targetDir = 'public/images/4-3';

// Ensure target dir exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Read catalog
let content = fs.readFileSync(catalogPath, 'utf8');

// Parse products
const productsMatch = content.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
if (!productsMatch) {
    console.error('Could not find products array');
    process.exit(1);
}
const products = eval(productsMatch[1]);

// Read source files
const sourceFiles = fs.readdirSync(sourceDir);

function normalize(str) {
    return str.normalize('NFC').toLowerCase().replace(/['"«»]/g, '').replace(/\s+/g, '').replace(/\.jpg|\.jpeg|\.png/g, '');
}

let updatedCount = 0;
const report = [];

sourceFiles.forEach(file => {
    if (file === '.DS_Store') return;

    const normalizedFilename = normalize(file);

    // Find matching product
    // We also need to try fuzzy matching if exact normalization fails? 
    // Let's stick to normalization first.
    const product = products.find(p => normalize(p.name) === normalizedFilename);

    if (product) {
        // Copy file
        const ext = path.extname(file).toLowerCase(); // likely .jpg
        const newFilename = `${product.id}${ext}`;
        const targetPath = path.join(targetDir, newFilename);
        const sourcePath = path.join(sourceDir, file);

        fs.copyFileSync(sourcePath, targetPath);

        // Update product image path
        product.image = `/images/4-3/${newFilename}`;

        report.push(`Matched: "${file}" -> ${product.name} (ID: ${product.id})`);
        updatedCount++;
    } else {
        report.push(`NO MATCH: "${file}" (Normalized: ${normalizedFilename})`);
        // Optional: print close matches?
    }
});

// Reconstruct catalog content
const header = content.substring(0, productsMatch.index);
const newProductsStr = JSON.stringify(products, null, 4);
const remainder = content.substring(productsMatch.index + productsMatch[0].length);
const newContent = `${header}export const products: Product[] = ${newProductsStr};${remainder}`;

fs.writeFileSync(catalogPath, newContent);

console.log(`Processed ${sourceFiles.length} files.`);
console.log(`Updated ${updatedCount} products.`);
console.log('Report:');
console.log(report.join('\n'));
