// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const express = require('express');
const app = express();
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://localhost:3000';
const cors = require("cors");
app.use(cors());
app.use(express.json());
const uuidv4 = require('uuid').v4;


app.post('/create-checkout-session', async (req, res) => {
  


  

  console.log("req**************************************************************")



const YOUR_DOMAIN = req.headers.origin;
const transformedItem = {
  price_data: {
    currency: 'usd',
    product_data: {     
      name: "item.name",
    },
    unit_amount:200 * 100,
  },
  description: "item.description INR",
  quantity: 1,
};
const session = await stripe.checkout.sessions.create({
  billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA' ,'IN'],
    },
  payment_method_types: ['card'],
  line_items: [transformedItem],
  mode: 'payment',   
  success_url: `${YOUR_DOMAIN}?success=true`,
  cancel_url: `${YOUR_DOMAIN}?canceled=true`,
},{
  stripeAccount: 'acct_1Kvas0RIOJxyG0IV',
});

// res.redirect(303, session.url);




console.log(session)
  res.status(200).json({  
    id: session.id,
    url: session.url,
    
});

});




app.get("/get-oauth-link", async (req, res) => {
  const state = uuidv4();
    console.log(state)
  // req.session.state = state  
  // const args = new URLSearchParams({state, client_id: 'ca_LcqBOcsuK65lylGaq6FKQrrCYqt7OJGq'})
  const url = `https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://connect.stripe.com/connect/default/oauth/test&client_id=ca_LcqBOcsuK65lylGaq6FKQrrCYqt7OJGq&state={STATE_VALUE}&stripe_user[business_type]=company`;
  return res.send({url});
});

app.get("/authorize-oauth", async (req, res) => {
  const { code} = req.query;

  // Assert the state matches the state you provided in the OAuth link (optional).
  // if(req.session.state !== state) {
  //   return res.status(403).json({ error: 'Incorrect state parameter: ' + state });
  // }

  // Send the authorization code to Stripe's API.
  stripe.oauth.token({
    grant_type: 'authorization_code',
    code
  }).then(
    (response) => {
      var connected_account_id = response.stripe_user_id;
      saveAccountId(connected_account_id);

      // Render some HTML or redirect to a different page.
      return res.redirect(301, 'http://localhost:4242/success.html')
    },
    (err) => {
      if (err.type === 'StripeInvalidGrantError') {
        return res.status(400).json({error: 'Invalid authorization code: ' + code});
      } else {
        return res.status(500).json({error: 'An unknown error occurred.'});
      }
    }
  );
});

const saveAccountId = (id) => {
  // Save the connected account ID from the response to your database.
  console.log('Connected account ID: ' + id);
}




  
app.listen(4242, () => console.log('Running on port 4242'));

