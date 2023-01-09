const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");

const stripe = require("stripe")(
  "sk_test_51MOEHvSAmgVrd7AuJltfU3sMrCKapNV8lBchRhih8GLwFBZF9BEwWUskf7Fx8jRRCcBBphU8U1PFciFIkoXc7jWm00w0rLnvyX"
);
//to set up and API

//app config
const app = express();
//middle wares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved got the amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunit of currency
    currency: "usd",
  });

  //created

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen Commands
exports.api = functions.https.onRequest(app);
