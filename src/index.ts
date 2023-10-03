import 'dotenv/config';
import Nylas from "nylas"

const NylasConfig = {
  apiKey: process.env.API_KEY as string,
  serverUrl: process.env.SERVER_URL as string,
};

const nylas = new Nylas(NylasConfig);

const applicationDetails = await nylas.applications.getDetails();

console.log({ applicationDetails })