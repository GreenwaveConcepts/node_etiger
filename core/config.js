const fs = require('fs');
const yaml = require('js-yaml');

module.exports.config = () => {
    let config = null;
    try {
        config = yaml.safeLoad(fs.readFileSync('../config_yamls/config.yaml', 'utf8'));
    } catch (e) {
        console.log(e);
    }
    return config;
};