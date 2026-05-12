const fs = require('fs');

let content = fs.readFileSync('src/components/Products.jsx', 'utf8');
content = content.trim();
if (content.startsWith('"') && content.endsWith('"')) {
    content = content.slice(1, -1);
    content = content.replace(/\\"/g, '"');
    fs.writeFileSync('src/components/Products.jsx', content, 'utf8');
    console.log('Fixed Products.jsx manually');
}
