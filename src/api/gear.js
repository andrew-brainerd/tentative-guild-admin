import { prop } from 'ramda';
import { client } from './client';

export const getCharacters = async () => {
  const response = await client.get('/gear/characters')
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};
