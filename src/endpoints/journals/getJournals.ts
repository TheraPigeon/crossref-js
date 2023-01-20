import axios from 'axios';

const BASE_URL = 'https://api.crossref.org/';
const ENDPOINT = '/journals';

// Return a list of journals in the Crossref database.
export const getJournals = async  () => {
  try {
    const url = BASE_URL + ENDPOINT;
    const result = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching journals', err);
  }
};
