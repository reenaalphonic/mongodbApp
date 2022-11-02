
const momentTz = require('moment-timezone');
const moment    =require ('moment' )

async function convertTime(date, slot, currencyType) {
    try {
      console.log("convertTime : ", date, slot, currencyType)
  
      let serviceDate = (date).substring(0, 10)
      if (slot.includes('P')) {
        modifier = 'PM'
        time = slot.substring(0, slot.indexOf('P'))
      }
      else {
        modifier = 'AM'
        time = slot.substring(0, slot.indexOf('A'))
      }
      let hrs = time;
      if (time === '12' &&  modifier == 'AM') {
        hrs = '00';
      }
      if (modifier === 'PM') {
        if(hrs!=12){
        hrs = parseInt(hrs, 10) + 12;
        }
        else{
          hrs = parseInt(hrs, 10)
        }
      }
       let dateStr = serviceDate + " " + hrs + ":00:00 +0000";  
  
      
        //   let test =  moment("022-09-30T12:00:00.000Z").format()

          let test = new Date(momentTz.tz(dateStr, 'YYYY-MM-DDTHH:mm' ,"Asia/Kolkata").utc())
        // let test = new moment('2022-10-04T12:00:00.000Z', "YYYY-MM-DDTHH:mm").utc();
        console.log("slot :" ,slot  ,"UTC Date :" ,test , "dateStr: " ,dateStr)
        let newTime = new Date(test).getTime() / 1000
        return newTime
      
    }
    catch (err) {
      console.log("Error : ", err)
    }
  
  }
  
  async function createMeeting(id, serviceName, date, timeSlot, currencyType) {
    try {
  
      const [start, end] = timeSlot.split("-")
      let serviceDt = null
  
  
        serviceDt = momentTz.tz(date, "Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
    
  
      // let serviceDt= new Date(date)
      // console.log("createMeeting  serviceDt : " ,serviceDt)
      let nbf = await convertTime(serviceDt, start, currencyType);
      let exp = await convertTime(serviceDt, end, currencyType)
  
      // console.log("createMeeting ", nbf, " ANd..", exp, "start :", start, "end : ", end)
  
      let meetingData =
      {
        "name": "meeting-" + id,
        "privacy": "public",
        "properties": {
          "start_audio_off": true,
          "start_video_off": true,
          "enable_chat": true,
          "enable_screenshare": true,
          "nbf": nbf,
          "exp": exp
        }
      }
    //   let data = await CM.Daily_Co.createNewRooms(meetingData)
      // console.log("DATA..", data)
      return data;
    } catch (error) {
      console.log(error)
    }
  }




  let date = "2022-09-29T18:30:00.000Z";

  // createMeeting("101", "serviceName", date, "9AM - 12PM", "inr")



 
  // let pickupDt = new Date(userData.pickupDate);
  let pickupDate=  new moment('2022-12-10' ,'YYYY-MM-DD');
  // let serviceDt = new Date(2022-10-13T18:30:00.000Z')
  let serviceDate=  new moment('2022-10-13' ,'YYYY-MM-DD') ;


  console.log(serviceDate , pickupDate )













    // if (currencyType == "SGD" || currencyType == "sgd") {

    //   // let newDate = moment.tz(serviceUtcDt, "Asia/Singapore").format("YYYY-MM-DD HH:mm:ss");
    //   let utcDt = new Date(newDate).toISOString()
    //   // console.log("newDate :" ,newDate , "Date String ." ,dateStr , "slot :" ,slot  , " utcDt : " ,utcDt)
    //   let newTime = new Date(newDate).getTime() / 1000
    //   return newTime
    // }
    // else {

    //   // let newDate = moment.tz(serviceUtcDt, "Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
    //   let utcDt = new Date(newDate).toISOString()
    //   // console.log("newDate :" ,newDate , "Date String ." ,dateStr , "slot :" ,slot  , " utcDt : " ,utcDt)
    //   let newTime = new Date(newDate).getTime() / 1000
    //   return newTime
    // }   
  