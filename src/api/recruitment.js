import { prop } from 'ramda';
import { client } from './client';

export const addPlayer = async ({ toonName, toonRace, toonClass, toonSpec }) => {
  return await client.post('/recruitment', { toonName, toonRace, toonClass, toonSpec })
    .then(prop('data'))
    .catch(err => console.error(err));
};

export const getApplications = async () => {
  return await client.get('/recruitment')
    .then(prop('data'))
    .catch(err => console.error(err));
};
