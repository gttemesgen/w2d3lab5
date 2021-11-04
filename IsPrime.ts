/**
 * main.js
 */
import { promises } from "stream";
const sustomers = require("./datasource/crmdata.ts");
const customerService = require("./service/customerService");
const customer = require("./model/customer");
customers.forEach((cust) => {
  console.log(cust.toString());
});
const findCustomer = async (id) => {
  let cust = await customerService.getCustomerById(id);
  console.log(cust.toString());
  return promises;
};
findCustomer(1001)
  .catch((error) => console.error(error.message))
  .finally(() => console.log("Finished!!!"));
module.exports = customers;
