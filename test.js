



function suffle(){
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledArray = array.sort(() => 0.5 - Math.random());
return shuffledArray

}

// console.log(suffle())
// console.log(suffle())
// console.log(suffle())


const currentDate= new Date()


let isoDate = currentDate.toISOString()
let month = String(currentDate.getMonth()).padStart(2, '0');
let year = currentDate.getFullYear()
let sortDate=(year+month).trim()



// console.log(isoDate ,month ,year ,sortDate)


let date = new Date("07/15/2015").toISOString();
let date2 = new Date("07/15/2016").toISOString();
        let iso1 = new Date(date);
        let iso2 = new Date(date2);                         
        

var time_difference = iso2.getTime() - iso1.getTime();  

var days_difference = time_difference / (1000 * 60 * 60 * 24);  


console.log(days_difference)






var a1 = [1,2,3];
var a2 = [1,3,2];
// console.log(JSON.stringify(a1)==JSON.stringify(a2));

let coupon= {
      
    }


    console.log("Coupon TEsting ,,,,", Object.values(coupon).length);

    const timeDiff = (earlyTime , latertime) => {

        
        earlyTime = new Date("2022-04-29T08:53:33.150Z")
        latertime = new Date("2022-04-29T07:23:33.156Z")

        let date1 = earlyTime.getTime()
        let date2 = latertime.getTime()
        let diff = date2 - date1;
        let msec = diff;
        let hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
       
        let mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
       
       
        return hh*60 + mm
            }


            console.log(timeDiff())
            
       
            // console.log( timeDiff(new Date("December 21, 2022 01:15:00:526") , new Date("December 23, 2022 01:15:00:526")))
            // console.log( timeDiff(new Date("December 21, 2022 02:00:00:526") , new Date("December 23, 2022 04:00:00:526")))
            // console.log( timeDiff(new Date("December 21, 2022 22:15:00:526") , new Date("December 23, 2022 23:15:00:526")))