// This is your test secret API key.
// const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const express = require('express');

const stripe = require('stripe')('sk_test_51LOKJtHVZzMAx56hj56jHfBX49lnRWIt966AZjdBVIfTmnlRdB4yIsb1XxarGJlS4oqlQti2JWaXo4LFeU4fTFhE004LiUkD7v')

const app = express();
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());
app.use(express.json());





async function createBankToken() {
 
// const token = await stripe.tokens.create({
//   bank_account: {
//     country: 'SG',
//     currency: 'SGD',
//     account_holder_name: 'Jenny Rosen',
//     account_holder_type: 'individual',
//     routing_number: '1100-000	',
//     account_number: '000123456',
    
//   },
// });


const token = await stripe.tokens.create({
  bank_account: {
    country: 'SG',
    currency: 'sgd',
    account_holder_name: 'Jenny Rosen',
    account_holder_type: 'individual',
    routing_number: '1100-000',
    account_number: '000123456',
  },
});
console.log(token)
  return token
}


// btok_1Kw12SIkon1wZ3rnGajkFUYU ----- BAnk token

async function createExternalAccount() {
  const bankAccount = await stripe.accounts.createExternalAccount(
    'acct_1LOKJtHVZzMAx56h',
    {
      external_account: 'btok_1LlAe6Ikon1wZ3rn4PAXYhSV',
    }
  );
  return bankAccount
}

//ba_1Kw1LzRIFrHDUENYR4TRlpvs -- External Account






async function payout() {
const payout = await stripe.payouts.create({
  amount: 100,
  currency: 'sgd',
  // method: 'instant',
  destination: "ba_1LnJOVHVZzMAx56hBdzxTxNk"

}, {
  stripeAccount: 'acct_1LOKJtHVZzMAx56h',
});
return payout
}

 async function accountBankAccounts(){
 
const accountBankAccounts = await stripe.accounts.listExternalAccounts(
  'acct_1KvaUcIkon1wZ3rn',
  {object: 'bank_account'}
);

  return accountBankAccounts
 }


 async function createExternalAccountB(){
 stripe.accounts.createExternalAccount('acct_1LOKJtHVZzMAx56h',
  {
      external_account: {       
          country: 'SG',
          currency: 'sgd',
          account_holder_name: 'Jenny Rosen',
          account_holder_type: 'individual',
          routing_number: '1100-000',
          account_number: '000123456',
        
      },
  }).then(function (bank_account) {
      console.log(JSON.stringify(bank_account, null, 2));
  });
}



 async function transfers() {

  const transfer = await stripe.transfers.create({
    amount: 4000,
    currency: 'sgd',
    destination: 'acct_1LlQXsQW4NrAq0fm',
    transfer_group: 'ORDER_95',
  });

  return transfer
  
 }

 async function instantpayouts() {
  const payout = await stripe.payouts.create({
    amount: 1000,
    currency: 'sgd',
    method: 'instant',
    destination: 'card_xyz',
  });
 }


 async function refund(){
  try{
    const refund = await stripe.refunds.create({
      payment_intent: 'pi_3LlQjhHVZzMAx56h0IR3d5vj',
      amount:10066
    })
    console.log(refund)
  }

  catch(err)
  {
    console.log(err)
  }
 }





async function stripefunction() {
  
   
    //  let account = await createBankToken()
    //  let account= await createExternalAccount()  
      //  let account = await payout()

 
  //  let account= await accountBankAccounts ()

  //  let account = await transfers()

  // let account = await createExternalAccountB()
  //  console.log(account);


 refund()
}

stripefunction()
