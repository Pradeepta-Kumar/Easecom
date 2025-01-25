const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id: "AeVtymW9grlOWjIxJCtZtSuxpSqzLUj8_Ct8pI6w92BjbMqL4ERL_gqv0wfvgmTZb6YPNwEH85CFa0uY",
  client_secret: "EI4K2M8HvQiUPdkfT4ZaDxx0tW8Sarj43YdCbAgHxQF17GFeX0xXO9pqDLFENiabNq3PL3zWhxTHnS0N",
});

module.exports = paypal;