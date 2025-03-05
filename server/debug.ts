import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check important file paths
const clientDir = path.resolve(__dirname, '../client');
const srcDir = path.resolve(clientDir, 'src');
const mainTsxPath = path.resolve(srcDir, 'main.tsx');
const indexHtmlPath = path.resolve(clientDir, 'index.html');

console.log('Checking file paths:');
console.log(`Client directory: ${clientDir} - ${fs.existsSync(clientDir) ? 'EXISTS' : 'MISSING'}`);
console.log(`Src directory: ${srcDir} - ${fs.existsSync(srcDir) ? 'EXISTS' : 'MISSING'}`);
console.log(`main.tsx: ${mainTsxPath} - ${fs.existsSync(mainTsxPath) ? 'EXISTS' : 'MISSING'}`);
console.log(`index.html: ${indexHtmlPath} - ${fs.existsSync(indexHtmlPath) ? 'EXISTS' : 'MISSING'}`);

// List files in the src directory
if (fs.existsSync(srcDir)) {
  console.log('\nFiles in src directory:');
  fs.readdirSync(srcDir).forEach(file => {
    console.log(`- ${file}`);
  });
}

// Check if the main.tsx file has the correct content
if (fs.existsSync(mainTsxPath)) {
  console.log('\nContent of main.tsx:');
  console.log(fs.readFileSync(mainTsxPath, 'utf8'));
} 