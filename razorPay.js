const axios = require('axios')
const username = 'rzp_test_MHFGEAwM6U2mEJ';
const password = 'karKEQeeLe0pufwsjDObpJLD'

const token = `${username}:${password}`;
const encodedToken = Buffer.from(token).toString('base64');
const session_url = 'https://api.razorpay.com/v1/contacts';
const createFundAcURl = 'https://api.razorpay.com/v1/fund_accounts';

const payoutURL = 'https://api.razorpay.com/v1/payouts';

async function createContact() {

  let body = {
    "name": "Reena Mehta",
    "email": "test@example.com",
    "contact": "9123456789",
    "type": "employee",
    "notes": {
      "notes_key_1": "Tea, Earl Grey, Hot",
      "notes_key_2": "Tea, Earl Grey… decaf."
    }
  }

  let config = {
    method: 'post',
    url: session_url,
    headers: { 'Authorization': 'Basic ' + encodedToken },
    data: body
  };



  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}
// {"id":"cont_JRPIdF1b4pKPzi","entity":"contact","name":"Reena Mehta","contact":"9123456789","email":"test@example.com","type":"employee","reference_id":null,"batch_id":null,"active":true,"notes":{"notes_key_1":"Tea, Earl Grey, Hot","notes_key_2":"Tea, Earl Grey… decaf."},"created_at":1651723325}

  // let data =createContact()
  // console.log(data)


async function createBank() {

  let body = {
    "contact_id": "cont_JRPIdF1b4pKPzi",
    "account_type": "bank_account",
    "bank_account": {
      "name": "ReenaMehta",
      "ifsc": "RAZR0000001",
      "account_number": "2323 2300 7274 3209"
    }
  }

  let config = {
    method: 'post',
    url: createFundAcURl,
    headers: { 'Authorization': 'Basic ' + encodedToken },
    data: body
  };


  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

// {"id":"fa_JRQ5G74nx3egx2","entity":"fund_account","contact_id":"cont_JRPIdF1b4pKPzi","account_type":"bank_account","bank_account":{"ifsc":"RAZR0000001","bank_name":null,"name":"ReenaMehta","notes":[],"account_number":"2323230072743209"},"batch_id":null,"active":true,"created_at":1651726087}
//  createBank()




async function createVPA() {

  let body = {
    "account_type": "vpa",
    "contact_id": "cont_JRPIdF1b4pKPzi",
    "vpa": {
      "address": "success@razorpay"

    }
  }

  let config = {
    method: 'post',
    url: createFundAcURl,
    headers: { 'Authorization': 'Basic ' + encodedToken },
    data: body
  };


  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.response);
    });

}

// {"id":"fa_JRQNNDnfE2RZJN","entity":"fund_account","contact_id":"cont_JRPIdF1b4pKPzi","account_type":"vpa","batch_id":null,"vpa":{"username":"success","handle":"razorpay","address":"success@razorpay"},"active":true,"created_at":1651727116}

// createVPA()




async function createCard() {

  let body =
  {
    "contact_id": "cont_JRPIdF1b4pKPzi",
    "account_type": "card",
    "card": {
      "name": "Reena mehta",
      "number": "5267318187975449"
    }
  }


  let config = {
    method: 'post',
    url: createFundAcURl,
    headers: { 'Authorization': 'Basic ' + encodedToken },
    data: body
  };


  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.response);
    });

}

// createCard()




async function createWallet() {

  let body =
  {
    "contact_id": "cont_JRPIdF1b4pKPzi",
    "account_type": "wallet",
    "wallet": {
      "provider": "amazonpay",
      "phone": "+919876543210",
      "email": "test@example.com",
      "name": "Reena Mehta"
    }
  }


  let config = {
    method: 'post',
    url: createFundAcURl,
    headers: { 'Authorization': 'Basic ' + encodedToken },
    data: body
  };


  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error.response);
    });

}



// {"id":"fa_JRQu2ENhlW3WGr","entity":"fund_account","contact_id":"cont_JRPIdF1b4pKPzi","account_type":"wallet","batch_id":null,"active":true,"created_at":1651728972,"wallet":{"phone":"+919876543210","provider":"amazonpay","email":"test@example.com","name":"Reena Mehta"}}
// createWallet()






async function createPayOutBank() {

  let body = {
    //  spijio  ---  2323230038860077
     "account_number": "2323230072743209",
     "fund_account_id": "fa_JRQ5G74nx3egx2", // Bank Account
    "mode": "NEFT",
    //  "fund_account_id": "fa_JRQNNDnfE2RZJN" ,//VPA - UPI ac
    //  "mode": "UPI",
    //  "fund_account_id": "fa_JRQu2ENhlW3WGr" ,//VPA - UPI ac
    // "mode": "amazonpay",
    "amount": 1000,
    "currency": "INR",
    "purpose": "payout",
    "queue_if_low_balance": true,
    "reference_id": "Acme Transaction ID 12345",
    "narration": "Acme Corp Fund Transfer",
    "notes": {
      "notes_key_1": "Tea, Earl Grey, Hot",
      "notes_key_2": "Tea, Earl Grey… decaf."
    },

  }

  let config = {
    method: 'post',
    url: payoutURL,
    headers: { 'Authorization': 'Basic ' + encodedToken },
    data: body
  };


  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log("ETRROUASSAS", error.response);
    });

}
 createPayOutBank()


async function check() {
  try {
    const config = {
      method: 'get',
      url: "https://api.razorpay.com/v1/payouts/pout_JsRe4c14lJ4D9M",
      headers: { 'Authorization': 'Basic ' + encodedToken },

    };
    const resp = await axios(config)
    console.log(resp.data)
  } catch (error) {
    console.log(error)
    throw error
  }
}



//  check() 