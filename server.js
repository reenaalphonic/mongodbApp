// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_51Iit5TSA1fSdY1w9GQXOLNFUTS3gVqQWRaP3FZCezcFGWb73xXAOYoYBzg1tKT9E8A2qNV823AIbRvb48QzyFUx9004UKDRfLH');
const express = require('express');
const app = express();
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());
const YOUR_DOMAIN = 'http://localhost:4242';
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    let data = req.body;
    // console.log(req.body) ;
    
    const charge = await stripe.charges.create({
        amount: data.amt,
        currency: 'usd',
        description: 'Testing.. Stripe Checkout',
        source: data.token.id,
    });
    console.log("charge..." , charge);

    res.status(200).json({
        status: "success",
    });
 
});



async function payout (){

const customer = await stripe.customers.create({
  description: 'My First Test Customer (created for API docs)',
});
return customer
}

console.log( payout())
// app.listen(4242, () => console.log('Running on port 4242'));