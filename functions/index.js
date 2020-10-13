const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hbt1RGYkySPpPBPeaxyBP4kvIOzEhQp2GoitJp7JwurHITCWKdWBoe9QVDkHq1BobS6NUuCJPznmlNFrc9z0rxc005VvX33Gt"
);

//  API -

// App config
const app = express();

// Middleware
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //currency subunits
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-d6bd7/us-central1/api
