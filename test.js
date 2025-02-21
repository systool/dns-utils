const dns_utils = require('./index.js');

(async () => {
        const addr = await dns_utils.host('systool.org');
        console.log(addr);
        
})();


    