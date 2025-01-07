const url = require('url');

const addr = 'https://mengwidev.id/class/tutorial?category=backend';
const query = url.parse(addr, true);

// -----------------------[url parsing]----------------------
// parse result
console.log(`protocol: ${query.protocol}`);
console.log(`hostname: ${query.hostname}`);
console.log(`pathname: ${query.pathname}`);
console.log(`params: ${query.search}`);

let qdata = query.query;
console.log(qdata);
// ----------------------------------------------------------
