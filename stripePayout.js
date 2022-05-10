// This is your test secret API key.
const stripe = require('stripe')('sk_test_51KvaUcIkon1wZ3rnjWEHnthawh3XEDZubuEpyBsIMlfng759qOfpvJxj9aGn9qln93odVMk9mIylVMJalf1rl1JI00muvJgXAu');
const express = require('express');
const app = express();
app.use(express.static('public'));
const cors = require("cors");
app.use(cors());
app.use(express.json());





async function createBankToken() {
 
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

async function createExternalAccount() {
  const bankAccount = await stripe.accounts.createExternalAccount(
    'acct_1KvaUcIkon1wZ3rn',
    {
      external_account: 'btok_1KxlUVIkon1wZ3rnCKII001v',
    }
  );
  return bankAccount
}

//ba_1Kw1LzRIFrHDUENYR4TRlpvs -- External Account






async function payout() {
const payout = await stripe.payouts.create({
  amount: 100,
  currency: 'sgd',
  destination: "ba_1Kxll6Ikon1wZ3rnnuEcgZkC"

}, {
  stripeAccount: 'acct_1KvaUcIkon1wZ3rn',
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





async function stripefunction() {
  
      // let account = await createBankToken()
    // let account= await createExternalAccount("acct_1KvaUcIkon1wZ3rn")  
    let account = await payout()

 
  //  let account= await accountBankAccounts ()
   console.log(account);
}

stripefunction()
