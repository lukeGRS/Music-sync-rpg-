// build.js — inline de CSS e JS num único HTML (para hospedar em qualquer lugar)
const fs = require('fs');
const path = require('path');

const root = __dirname;
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');

const css = read('styles/main.css');

const jsOrder = [
  'src/core.js',
  'src/storage.js',
  'src/engine.js',
  'src/net.js',
  'src/session.js',
  'src/app.js',
];
const js = jsOrder.map((f) => `/* ==== ${f} ==== */\n` + read(f)).join('\n\n');

let html = read('index.html');
html = html
  .replace(
    /<link rel="stylesheet" href="styles\/main\.css">/,
    `<style>\n${css}\n</style>`
  )
  .replace(
    /<script src="src\/core\.js"><\/script>[\s\S]*?<script src="src\/app\.js"><\/script>/,
    `<script>\n${js}\n</script>`
  );

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'synctube-music.html'), html);
console.log('✅ dist/synctube-music.html gerado (' + (html.length / 1024).toFixed(1) + ' KB)');