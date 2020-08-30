const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.REACT_APP_FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

export { finnhubClient as default };