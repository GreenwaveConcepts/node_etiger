const vtiger = require('vtiger');
const user_model = require('../models/users_model');
module.exports = {
    pullLeadInfo : async (record, user) => {
        userRecord = await user_model.userProfile(user);
        console.log(userRecord);
    }
}