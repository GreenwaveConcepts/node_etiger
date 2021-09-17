const config = require("../core/config").config();
const vtiger = require('vtiger');
// vtiger webservice will always be admin in this module in order to pull all user details
const connection = new CRM.Connection(
    config.webservices,
    config.etigerAPIuser,
    config.etigerAPIkey
);
const envro = config.env;
module.exports = {
    userProfile: async (user) => {
        data = new Promise(new Promise((resolve, reject) => {
            connection.login()
                .then(() => connection.retrieve('19x' + user))
                .then(element => {
                    if (envro == 'dev') {
                        console.log('User model ran')
                    };
                    resolve(element);
                })
                .then(() => {
                    connection.logout()
                })
                .catch((error) => {
                    //catch error
                    resolve(error.message);
                    if (envro == 'dev') {
                        console.error(error.message)
                    }
                })
        }));
        return await data;
    },
}