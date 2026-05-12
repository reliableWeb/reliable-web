const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let trimmed = content.trim();
            if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
                try {
                    const parsed = JSON.parse(trimmed.replace(/\r/g, '').replace(/\n/g, '\\n'));
                    if (typeof parsed === 'string') {
                        fs.writeFileSync(fullPath, parsed, 'utf8');
                        console.log('Fixed', fullPath);
                    }
                } catch (e) {
                    console.log('Failed to parse', fullPath, e.message);
                }
            }
        }
    }
}

processDir(path.join(__dirname, 'src'));
