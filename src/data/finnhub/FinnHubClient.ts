const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.REACT_APP_FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();
const socket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`);

export { finnhubClient as default, socket };