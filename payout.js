const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const express = require('express');
const app = express();
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());
app.use(express.json());



//  async function createAccount(){
//   const account = await stripe.accounts.create({
//     country: 'SG',
//     type: 'custom',
//     capabilities: {transfers: {requested: true}},
//     tos_acceptance: {service_agreement: 'recipient'},
//   });

//   console.log(account.id)
//  }




async function payout() {



  //  let bal =await stripe.balance.retrieve( 
  //   {stripe_account: 'acct_1Kvas0RIOJxyG0IV'}
  //  );


  const payout = await stripe.payouts.create({
    amount: 100,
    currency: 'sgd',
    destination: "ba_1KvbNORIOJxyG0IVgGE70dwF"

  }, {
    stripeAccount: 'acct_1Kvas0RIOJxyG0IV',
  });

  console.log(payout)
}

// async function Instantpayout(){
// const payout = await stripe.payouts.create({
//   amount: 20,
//   currency: 'sgd',
//   method: 'instant',

// },
// {
//   stripeAccount: 'acct_1Kvas0RIOJxyG0IV',
// });

// }


async function createcarge() {
  //  const paymentIntent = await stripe.paymentIntents.create({
  //    amount: 1000,
  //    currency: 'sgd',
  //  }, {
  //    stripeAccount: 'acct_1Kvas0RIOJxyG0IV',

  //  });

}


async function createcarge() {
  let charged;
  try {
  
  const paymentIntent = await stripe.paymentIntents.create({
  amount: 10000,
  currency: 'sgd',
  payment_method_types: ['card'],
}, {
  stripeAccount: 'acct_1Kvas0RIOJxyG0IV',
});
    console.log(paymentIntent.id)
  } catch (err) {
    console.log(err.message);
  }

}


async function confirmPayment(id) {
  try {
    const paymentConfirm = await stripe.paymentIntents.confirm(
      id,
      { payment_method: "pm_card_bypassPending" },
      {
        stripeAccount: 'acct_1Kvas0RIOJxyG0IV',
      }
    );
    console.log("TEsting ...." , paymentConfirm.id)
  } catch (err) {
    console.log(err.message);
  }

};

// createcarge()

  confirmPayment('pi_3Kw3CORIOJxyG0IV0RKEvmsT')


