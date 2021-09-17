const vtiger = require('vtiger');
const user_model = require('../models/users_model');
module.exports = {
    pullLeadInfo: (record, user) => {
        user_model.userProfile(user, (data) => {
            key = data.accesskey;
            userName = data.user_name
        });
        console.log(key + ' ' + userName);
    }
}