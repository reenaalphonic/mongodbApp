// const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const stripe = require('stripe')('sk_test_51LOKJtHVZzMAx56hj56jHfBX49lnRWIt966AZjdBVIfTmnlRdB4yIsb1XxarGJlS4oqlQti2JWaXo4LFeU4fTFhE004LiUkD7v')
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


async function createStandardAccount(){
  const account = await stripe.accounts.create({type: 'standard'});
  return account.id
}


async function  createAccountLink(id)
{
  const accountLink = await stripe.accountLinks.create({
    account: id,
    refresh_url: 'https://example.com/reauth',
    return_url: 'https://example.com/return',
    type: 'account_onboarding',
  });
}

// async function payout() {



//   //  let bal =await stripe.balance.retrieve( 
//   //   {stripe_account: 'acct_1Kvas0RIOJxyG0IV'}
//   //  );


//   const payout = await stripe.payouts.create({
//     amount: 100,
//     currency: 'sgd',
//     destination: "ba_1KxST8RKit7u7J2bxLjJgpRQ"

//   }, {
//     stripeAccount: 'acct_1LOKJtHVZzMAx56h',
//   });

//   console.log(payout)
// }

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
   const paymentIntent = await stripe.paymentIntents.create({
     amount: 100000,
     currency: 'sgd',
   }, {
     stripeAccount: 'acct_1LOKJtHVZzMAx56h',

   });

}


// async function createcarge() {
//   let charged;
//   try {
  
//   const paymentIntent = await stripe.paymentIntents.create({
//   amount: 10000,
//   currency: 'sgd',
//   payment_method_types: ['card'],
// }, {
//   stripeAccount: 'acct_1Kvas0RIOJxyG0IV',
// });
//     console.log(paymentIntent.id)
//   } catch (err) {
//     console.log(err.message);
//   }

// }


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



async function createAccount() {

  const account = await stripe.accounts.create({
    type: 'custom',
    country: 'SG',
    email: 'jenny.rosen@example.com',
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
  });
  return account
}




async function createStandardAccount() {
  const account = await stripe.accounts.create({ type: 'standard' });
  return account.id
}


async function createExpressAccount() {
  // const account = await stripe.accounts.create({type: 'express'});
  const account = await stripe.accounts.create({
    country: 'SG',
    type: 'express',
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
    business_type: 'individual',
    business_profile: { url: 'https://vendor-101-prod.com' },
  });
  return account.id
}



async function createAccountLink(id) {
  const accountLink = await stripe.accountLinks.create({
    account: id,
    refresh_url: 'https://example.com/reauth',
    return_url: 'https://example.com/return',

    type: 'account_onboarding',

  });
  return accountLink
}




async function deleteAccount(id) {
  const deleted = await stripe.accounts.del(
    id
  );

  return deleted
}

async function updateAccount(id) {
  const account = await stripe.accounts.update(
    id,
    { tos_acceptance: { date: 1609798905, ip: '8.8.8.8' } }

  );
  return account
}


async function getAccount(id) {
  const account = await stripe.accounts.retrieve(
    id
  );
  return account
}



async function createTopup() {
  const topup = await stripe.topups.create({
    amount: 2000,
    currency: 'sgd',
    description: 'Top-up for week of May 31',
    statement_descriptor: 'Weekly top-up',
  });

  return topup.id
}



async function createcarge() {
  let charged;
  try {

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100000,
      currency: 'sgd',
      payment_method_types: ['card'],
    }, {
      stripeAccount: 'acct_1LOKJtHVZzMAx56h',
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
        stripeAccount: 'acct_1LOKJtHVZzMAx56h',
      }
    );
    console.log("TEsting ....", paymentConfirm.id)
  } catch (err) {
    console.log(err.message);
  }

};

// createcarge()

confirmPayment('pi_3LlQjhHVZzMAx56h0IR3d5vj')



async function loginLink() {
  const loginLink = await stripe.accounts.createLoginLink(
    'acct_1Kx9LpRQAPdQAP2q'
  );
  return loginLink
}



// createcarge()

   confirmPayment('pi_3LlQo8HVZzMAx56h0NOjYu4K')


  


  // payout()

