// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const express = require('express');
const app = express();
app.use(express.static('public'));
const YOUR_DOMAIN = 'http://localhost:3000';
const cors = require("cors");
app.use(cors());
app.use(express.json());

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





  
app.listen(4242, () => console.log('Running on port 4242'));

