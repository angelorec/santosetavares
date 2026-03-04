import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

console.log(`Starting Vite from: ${vitePath}`);

const child = spawn('node', [vitePath, '--port', '3000', '--host', '0.0.0.0'], {
    stdio: 'inherit',
    env: process.env
});

child.on('exit', (code) => {
    process.exit(code);
});
