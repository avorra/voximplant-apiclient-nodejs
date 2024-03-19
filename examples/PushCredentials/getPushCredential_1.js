const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Get push credentials.
  client.PushCredentials.getPushCredential({ pushCredentialId: '1' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
