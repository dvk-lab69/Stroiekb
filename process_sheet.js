const fs = require('fs');
const html = fs.readFileSync('sheet.html', 'utf8');

// 1. Parse posObj calls
const overlayMap = {};
// Matches: posObj('SHEET', 'ID', ROW, COL, ...)
// Note: The structure in file ends with ); and has spaces.
// Pattern: posObj\('[\w\d]+', 'embed_[\w\d]+', \d+, 3,
const posObjRegex = /posObj\('[^']+',\s*'([^']+)',\s*(\d+),\s*3\s*,/g;
let match;
let posObjCount = 0;
while ((match = posObjRegex.exec(html)) !== null) {
    overlayMap[parseInt(match[2])] = match[1];
    posObjCount++;
}
console.log(`Found ${posObjCount} overlay mappings.`);

// 2. Parse Embed IDs to URLs
const embedUrlMap = {};
// Divs use single quotes for id and src in the footer section
// <div id='embed_...' ...><img src='...'></div>
const embedRegex = /div id='(embed_[^']+)'[^>]*><img src='([^']+)'/g;
let embedCount = 0;
while ((match = embedRegex.exec(html)) !== null) {
    embedUrlMap[match[1]] = match[2];
    embedCount++;
}
console.log(`Found ${embedCount} overlay images.`);

// 3. Parse Rows
// Split by <tr
const fragments = html.split('<tr');
const rows = [];

// Skip first fragment (before first tr)
for (let i = 1; i < fragments.length; i++) {
    const fragment = fragments[i];

    // Find Row ID: id="...R(\d+)"
    // It's usually in the <th ...> which is the first tag inside tr
    const idMatch = /id="[^"]+R(\d+)"/.exec(fragment);
    if (!idMatch) continue;

    const rowIdx = parseInt(idMatch[1]);

    // Extract Cells
    // <td ...>...</td>
    const cells = [];
    const cellRegex = /<td[^>]*>(.*?)<\/td>/g;
    let cMatch;
    while ((cMatch = cellRegex.exec(fragment)) !== null) {
        cells.push(cMatch[1]);
    }

    // We need at least 4 cells (A, B, C, D) 
    // Actually, A is empty td, B is index, C is Name, D is Image.
    // Index 0: Col A
    // Index 1: Col B
    // Index 2: Col C (Name)
    // Index 3: Col D (Image)

    if (cells.length < 4) continue;

    let name = cells[2].replace(/<[^>]+>/g, '').trim();
    // Decode common entities
    name = name.replace(/&quot;/g, '"');

    if (!name || name === 'Наименование') continue;

    // Check for Image
    let url = null;

    // 1. Inline Image?
    // Matches <img src="..."> matched with double or single quotes
    // Note: Inline content usually uses double quotes in the main table part
    const imgMatch = /<img[^>]+src=["']([^"']+)["']/.exec(cells[3]);
    if (imgMatch) {
        url = imgMatch[1];
    } else {
        // 2. Overlay Image
        const embedId = overlayMap[rowIdx];
        if (embedId && embedUrlMap[embedId]) {
            url = embedUrlMap[embedId];
        } else {
            // Try visible row index? 
            // id="...R5" means Row 5 (0-based).
            // posObj uses 5.
            // So direct map should work.
        }
    }

    // Clean URL
    if (url) {
        url = url.replace(/&amp;/g, '&');
        // Extract Price (Col F -> Index 5)
        let price = 0;
        if (cells[5]) {
            const priceStr = cells[5].replace(/<[^>]+>/g, '').trim();
            price = parseInt(priceStr.replace(/\D/g, '')) || 0;
        }

        // Extract Dimensions (Col E -> Index 4)
        let dims = cells[4] ? cells[4].replace(/<[^>]+>/g, '').trim() : '';

        rows.push({
            id: `row_${rowIdx}`, // Temporary ID
            name: name,
            url: url,
            price: price,
            dims: dims,
            category: 'furniture' // Default
        });
    }
}

console.error(`Extracted ${rows.length} products.`);
fs.writeFileSync('products.json', JSON.stringify(rows, null, 2));
console.error('Saved to products.json');
