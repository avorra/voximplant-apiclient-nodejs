const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the current currency rate: RUR/USD.
  client.Accounts.getCurrencyRate({currency: 'RUR'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};