// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const express = require('express');
const app = express();
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());
app.use(express.json());



async function createAccount(){

const account = await stripe.accounts.create({
  type: 'custom',
  country: 'SG',
  email: 'jenny.rosen@example.com',
  capabilities: {
    card_payments: {requested: true},
    transfers: {requested: true},
  },
});
return account
}


async function deleteAccount(id){
    const deleted = await stripe.accounts.del(
       id
      );

      return deleted
}

async function updateAccount(id){
    const account = await stripe.accounts.update(
        id,
         {tos_acceptance: {date: 1609798905, ip: '8.8.8.8'}}
       
      );
      return account
}


 async function getAccount(id){
    const account = await stripe.accounts.retrieve(
        id
      );
      return account
 }

   async function createBankToken(){
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
      return token
   }

// btok_1Kw12SIkon1wZ3rnGajkFUYU ----- BAnk token

 async function createExternalAccount(id){
    const bankAccount = await stripe.accounts.createExternalAccount(
        id,
        {
          external_account: 'btok_1Kw12SIkon1wZ3rnGajkFUYU',
        }
      );
      return bankAccount
 }

 //ba_1Kw1LzRIFrHDUENYR4TRlpvs -- External Account


async function createTopup(){
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
  
    // confirmPayment('pi_3Kw3CORIOJxyG0IV0RKEvmsT')
  




async function stripefunction(){
//  let account = await createAccount()
//  let account = await deleteAccount("acct_1KvyVXRAWrQRGkvO")
//  let account= await updateAccount("acct_1Kw16QRIFrHDUENY")
// let account= await getAccount("acct_1Kw16QRIFrHDUENY")
// let bank = await createBankToken()
//   let account= await createExternalAccount("acct_1Kw16QRIFrHDUENY")
   let account = await createTopup ()
  console.log(account);
}

stripefunction()
