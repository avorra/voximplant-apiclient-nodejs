const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Get the two queues.
  client.Queues.getQueues({count: '2'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};