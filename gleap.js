import Gleap from 'gleap';

// Initialize Gleap with your API key
Gleap.initialize(process.env.GLEAP_API_KEY);

Gleap.getInstance().softReInitialize();
