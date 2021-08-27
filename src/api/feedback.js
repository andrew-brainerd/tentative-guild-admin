import { prop } from 'ramda';
import { client } from './client';

export const addSuggestion = async ({ name, suggestion }) => {
  return await client.post('/feedback', { name, suggestion })
    .then(prop('data'))
    .catch(err => console.error(err));
};

export const getSuggestions = async () => {
  return await client.get('/feedback')
    .then(prop('data'))
    .catch(err => console.error(err));
};
