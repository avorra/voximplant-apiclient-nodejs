const VoximplantApiClient = require("@voximplant/apiclient-nodejs").default;
const client = new ApiClient();
client.onReady = function(){
  // Transfer 5.67 $ to the user 1 and transfer 5.67 $ to the user 2 too. The account spends 2*5.67= 11.34 $ in total.
  client.Users.transferMoneyToUser({userId: '1;2',
            amount: '5.67'})
        .then(ev=>console.log(ev))
        .catch(err=>console.error(err));
};