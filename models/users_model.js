const config = require("../core/config").config();
const vtiger = require('vtiger');
// vtiger webservice will always be admin in this module in order to pull all user details
const connection = new vtiger.Connection(
    config.webservices,
    config.etigerAPIuser,
    config.etigerAPIkey
);
const envro = config.env;
module.exports = {
    userProfile: async (user) => {
        data = new Promise((resolve, reject) => {
            connection.login()
            .then(() => connection.retrieve('19x' + user))
            .then(element => {
                resolve(element)
            })
            .catch((error) => {
                //catch error
                console.error(error.message)
            })
        })
        return await data;
    },
}