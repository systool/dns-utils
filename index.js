

exports.host =  async function(host_str) {
    const dns = require('dns');

    const options = {
        all: true
    }
    
    return new Promise((resolve, reject) => {
        dns.lookup(host_str, options, (err, records) => {
            if (err) {
                reject(err);
            } else {
                resolve(records);
            }
        });
    });

    
}