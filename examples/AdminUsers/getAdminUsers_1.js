const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get two first admin users.
  client.AdminUsers.getAdminUsers({withAccessEntries: 'true',
            count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};