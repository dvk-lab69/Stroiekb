const fs = require('fs');
const path = require('path');

const catalogPath = 'app/data/catalog.ts';
let catalogContent = fs.readFileSync(catalogPath, 'utf8');

const lines = catalogContent.split('\n');
let currentId = null;
let newLines = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Check for ID (handle quoted or unquoted keys)
    // Matches: "id": "slug", or id: "slug",
    const idMatch = line.match(/^\s*"?id"?:\s*"([^"]+)",/);
    if (idMatch) {
        currentId = idMatch[1];
        newLines.push(line);
        continue;
    }

    // Check for Image
    // Matches: "image": "path" or image: "path"
    const imgMatch = line.match(/^\s*"?image"?:\s*"([^"]+)"/);
    if (imgMatch && currentId) {
        const currentPath = imgMatch[1];
        // Check if it's one of our extracted images
        if (currentPath.includes('/images/extracted/')) {
            const oldFilename = path.basename(currentPath);
            const ext = path.extname(oldFilename);
            const newFilename = `${currentId}${ext}`;
            const newPath = `/images/extracted/${newFilename}`;

            // Perform rename
            const oldAbsPath = path.join(__dirname, 'public', currentPath);
            const newAbsPath = path.join(__dirname, 'public', 'images/extracted', newFilename);

            if (fs.existsSync(oldAbsPath)) {
                // Rename
                try {
                    fs.renameSync(oldAbsPath, newAbsPath);
                    console.log(`Renamed ${oldFilename} -> ${newFilename}`);
                    // Update line to use new path
                    line = line.replace(currentPath, newPath);
                } catch (e) {
                    console.error(`Error renaming ${oldFilename}: ${e.message}`);
                }
            } else if (fs.existsSync(newAbsPath)) {
                // Already renamed?
                // console.log(`File already renamed: ${newFilename}`);
                line = line.replace(currentPath, newPath);
            } else {
                // Silently ignore if file missing, or log
                // console.warn(`File not found: ${oldAbsPath}`);
            }
        }
    }

    // Reset ID if we hit end of object? }
    if (line.trim() === '},') {
        currentId = null;
    }

    newLines.push(line);
}

fs.writeFileSync(catalogPath, newLines.join('\n'));
console.log('Updated catalog.ts');
