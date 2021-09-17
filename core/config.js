const fs = require('fs');
const yaml = require('js-yaml');

module.exports.config = () => {
    let config = null;
    try {
        config = yaml.load(fs.readFileSync('/node/node_etiger/yaml_configs/config.yaml', 'utf8'));
    } catch (e) {
        console.log(e);
    }
    return config;
};