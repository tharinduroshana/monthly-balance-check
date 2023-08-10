import json from "../data/transactions.json";

/*
 * The following function will mimic the API call to the server. In order to set a buffer time, setTimeout function
 * was called and returned a Promise.
 * */
export const getTransactionsMockAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(json);
    }, 1000);
  });
};

export const getTransactionsWithBalance = async () => {
  const transactions = await getTransactionsMockAPI();
  let accumulativeBalance = 0;
  const newTransactions = transactions.map((tx) => {
    accumulativeBalance += tx.amount;
    return { ...tx, balance: accumulativeBalance.toFixed(2) };
  });
  return { transactions: newTransactions, monthlyBalance: accumulativeBalance };
};
