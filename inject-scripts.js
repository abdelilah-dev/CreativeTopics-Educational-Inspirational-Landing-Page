import fs from 'fs';
import path from 'path';

const distDir = './dist';
const assetsDir = './dist/assets';

const jsFiles = fs.readdirSync(assetsDir).filter(file => file.endsWith('.js'));

if (jsFiles.length === 0) {
    console.error('❌ No JS file found in dist/assets');
    process.exit(1);
}

const jsFile = `/assets/${jsFiles[0]}`;
const htmlFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (!content.includes(jsFile)) {
        content = content.replace('</body>', `  <script type="module" src=".${jsFile}"></script>\n</body>`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Injected script into ${file}`);
    }
});
