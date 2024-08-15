import Gleap from 'gleap';

// Initialize Gleap with your API key
const gleap_token = process.env.GLEAP_API_KEY;

console.log('gleap_token', gleap_token);

Gleap.initialize(gleap_token);
Gleap.getInstance().softReInitialize();
