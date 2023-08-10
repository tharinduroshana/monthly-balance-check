import jsonFromFile from "../data/transactions.json";
const {getTransactionsMockAPI} = require("../util/MockAPI");

test("mock transaction API testing", async () => {
    const json = await getTransactionsMockAPI();
    expect(json).toBe(jsonFromFile);
})