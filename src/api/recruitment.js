import { prop } from 'ramda';
import { client } from './client';

export const addPlayer = async ({ toonName, toonRace, toonClass, toonSpec }) => {
  const response = await client.post('/recruitment', { toonName, toonRace, toonClass, toonSpec })
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};

export const getApplications = async () => {
  const response = await client.get('/recruitment')
    .then(prop('data'))
    .catch(err => console.error(err));

  return response;
};
