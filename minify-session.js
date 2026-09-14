const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const fullState = JSON.parse(fs.readFileSync(path.join(__dirname, 'storageState.json'), 'utf8'));

const essentialCookies = (fullState.cookies || []).filter(c => 
  c.domain && c.domain.includes('naukri.com')
);
const essentialOrigins = (fullState.origins || []).filter(o => 
  o.origin && o.origin.includes('naukri.com')
);

const minifiedState = {
  cookies: essentialCookies,
  origins: essentialOrigins
};

const minifiedJson = JSON.stringify(minifiedState);
fs.writeFileSync(path.join(__dirname, 'storageState.json'), minifiedJson, 'utf8');

const compressed = zlib.gzipSync(Buffer.from(minifiedJson, 'utf8'));
const b64 = compressed.toString('base64');
fs.writeFileSync(path.join(__dirname, 'session_base64.txt'), b64, 'utf8');

console.log('Compact session key created successfully! Length:', b64.length);
