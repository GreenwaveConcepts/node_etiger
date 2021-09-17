const vtiger = require('vtiger');
const user_model = require('../models/users_model');
const config = require("../core/config").config();
module.exports = {
    pullLeadInfo: async (record, user, cb) => {
        userData = new Promise((resolve, reject) => {
            user_model.userProfile(user, (data) => {
                resolve({
                    key: data.accesskey,
                    username: data.user_name
                })
            });
        })
        loginInfo = await userData;

        lead = new Promise((resolve, reject) => {
            var connect = new vtiger.Connection(config.webservices,
                loginInfo.username,
                loginInfo.key);
            connect.login()
                .then(() => connect.retrieve('2x' + record))
                .then(element => {
                    resolve({lead: element});
                    connect.logout()
                })
                .catch((error) => {
                    //catch error
                    console.error(error.message)
                })
        })

        cb(await lead);
    }
}