const VoximplantApiClient = require('@voximplant/apiclient-nodejs').default;
const client = new VoximplantApiClient();
client.onReady = function () {
  // Modify credentials.
  client.PushCredentials.setPushCredential({ pushCredentialId: '1', certPassword: '1234567' })
    .then((ev) => console.log(ev))
    .catch((err) => console.error(err));
};
