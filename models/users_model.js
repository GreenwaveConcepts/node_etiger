const config = require("../core/config");
const vtiger = require('vtiger');
// vtiger webservice will always be admin in this module in order to pull all user details
const connection = new CRM.Connection(
    config.webservices.toString(),
    config.etigerAPIuser.toString(),
    config.etigerAPIkey.toString()
);
module.exports = {
    userProfile: async (user) => {

    }
}