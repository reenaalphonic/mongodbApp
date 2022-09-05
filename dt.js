


function convertTime (date,slot) {
    let stDate = new Date(date)
    let time;
    if (slot.includes('P')) {
      modifier = 'PM'
      time = slot.substring(0, slot.indexOf('P'))   
    }
    else {
      modifier = 'AM'   
      time = slot.substring(0, slot.indexOf('A'))   
    }
  
  
    let hrs = time;  
    if (time === '12') {
      hrs = '00';
    }
  
    if (modifier === 'PM') {
      hrs = parseInt(hrs, 10) + 12;
    }
    
    let dateStr = date +" "+ hrs+":00:00"
    console.log(dateStr)
    newDt =new Date(dateStr).toISOString();
    console.log(newDt)
  

}

convertTime("2022-07-15" ,"4PM")