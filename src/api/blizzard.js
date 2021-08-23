import { path, prop } from 'ramda';
import { client } from './client';

export const authenticate = async () => {
  const response = await client.get('/auth/bnet')
    .then(path(['data', 'auth']))
    .catch(err => console.error(err));

  return response;
};

export const getItemInfo = async (token, itemId) => {
  console.log('Get Item Info', token, itemId);
  const response = await client.get(`/wow/items/${itemId}?token=${token}`)
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};
