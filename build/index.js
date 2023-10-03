import 'dotenv/config';
import Nylas from "nylas";
const NylasConfig = {
    apiKey: process.env.API_KEY,
    serverUrl: process.env.SERVER_URL,
};
const nylas = new Nylas(NylasConfig);
const applicationDetails = await nylas.applications.getDetails();
console.log({ applicationDetails });
