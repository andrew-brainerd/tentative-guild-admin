import { prop } from 'ramda';
import { client } from './client';

export const addSuggestion = async ({ name, suggestion }) => {
  const response = await client.post('/feedback', { name, suggestion })
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};
