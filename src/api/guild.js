import { prop } from 'ramda';
import { client } from './client';

export const getGuild = async (sort = 'name', direction = 'asc') => {
  const response = await client.get(`/guild?sort=${sort}&direction=${direction}`)
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};
