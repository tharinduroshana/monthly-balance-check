import json from '../data/transactions.json';

/*
* The following function will mimic the API call to the server. In order to set a buffer time, setTimeout function
* was called and returned a Promise.
* */
export const getTransactionsMockAPI = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(json);
    }, 1000);
  })
}