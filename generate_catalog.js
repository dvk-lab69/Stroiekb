const fs = require('fs');
const path = require('path');

// Slavic to Latin transliteration for slugs
function transliterate(word) {
    const a = { "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch", "ъ": "", "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya" };
    return word.split('').map(function (char) {
        return a[char] || char;
    }).join("");
}

function slugify(text) {
    text = text.toLowerCase();
    text = transliterate(text);
    return text.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function getCategory(name) {
    const lower = name.toLowerCase();
    if (lower.includes('урна')) return 'urns';
    if (lower.includes('скамья') || lower.includes('скамейка')) return 'benches';
    if (lower.includes('решётка') || lower.includes('решетка')) return 'grates';
    if (lower.includes('плитка')) return 'tiles';
    if (lower.includes('качель')) return 'swings';
    if (lower.includes('очаг') || lower.includes('костровая') || lower.includes('чаша')) return 'fire_pits';
    if (lower.includes('светильник')) return 'lighting';
    if (lower.includes('забор') || lower.includes('ограждение')) return 'fences';
    if (lower.includes('вазон') || lower.includes('шар') || lower.includes('лепестки') || lower.includes('изделие')) return 'decor';
    return 'other';
}

const products = JSON.parse(fs.readFileSync('products_with_images.json', 'utf8'));

// Generate Catalog Content
const uniqueCategories = new Set();
const productItems = products.map(p => {
    const category = getCategory(p.name);
    uniqueCategories.add(category);

    // Create ID from name (slug)
    // Remove "Урна", "Скамейка" etc prefixes for cleaner IDs if possible?
    // Or just slugify the whole name.
    // Let's slugify name, e.g., "urn-vintage".
    let slug = slugify(p.name);

    // Ensure slug starts with something reasonable?
    // "ulichnaya-urna-vintage" -> "vintage" maybe too short.
    // "ulichnaya-urna-vintage" is fine.

    return {
        id: slug,
        name: p.name,
        category: category,
        price: p.price,
        unit: 'шт', // Default from sheet? Sheet didn't have unit explicit in logic but prices were "rub/sht".
        dimensions: p.dims || '',
        image: p.localPath
    };
});

const categoryList = [
    { id: 'urns', label: 'Урны' },
    { id: 'benches', label: 'Скамейки' },
    { id: 'grates', label: 'Приствольные решётки' },
    { id: 'tiles', label: 'Плитка' },
    { id: 'swings', label: 'Качели' },
    { id: 'fire_pits', label: 'Очаги' },
    { id: 'lighting', label: 'Освещение' },
    { id: 'fences', label: 'Заборы и ограждения' },
    { id: 'decor', label: 'Декор и МАФ' },
    { id: 'planters', label: 'Вазоны' },
    { id: 'other', label: 'Прочее' }
].filter(c => uniqueCategories.has(c.id));

const categoryTypeUnion = categoryList.map(c => `"${c.id}"`).join(' | ');

const tsContent = `export type CategoryType = ${categoryTypeUnion};

export interface Product {
    id: string;
    name: string;
    category: CategoryType;
    price: number;
    unit: string;
    dimensions?: string;
    image: string;
    description?: string;
}

export const categories = ${JSON.stringify(categoryList, null, 4)};

export const products: Product[] = ${JSON.stringify(productItems, null, 4)};
`;

fs.writeFileSync('app/data/catalog.ts', tsContent);
console.log('Generated app/data/catalog.ts');
