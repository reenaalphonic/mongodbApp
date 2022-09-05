let data ="3PM - 6PM"
data= data.split("-")
index= data[0].indexOf('P')

let t1= data[0].substring(0, index)
let t2= data[1].substring(0, index)

console.log(t1 ,t2 )

var arr = [11, 12, 13, 14, 15 ];

let randomNumber = Array.from({length: 3}, () => arr[Math.floor(Math.random() * arr.length)]);
// console.log("Random:", randomNumber);



function suffle(){
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffledArray = array.sort(() => 0.5 - Math.random());

return shuffledArray

}

//  console.log(suffle())
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


// console.log(days_difference)






var a1 = [1,2,3];
var a2 = [1,3,2];
// console.log(JSON.stringify(a1)==JSON.stringify(a2));

let coupon= {
      
    }


    // console.log("Coupon TEsting ,,,,", Object.values(coupon).length);

    const timeDiff = (earlyTime , latertime) => {

        
        latertime = new Date("2022-05-13T08:15:10.721Z")
        earlyTime = new Date("2022-05-13T07:31:10.721Z")

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




            function dayDiff(){

                var date1 = new Date("2022-05-12T08:57:27.783Z");
                var date2 = new Date("08/10/2017");
                var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24)); //gives day difference 
                //one_day means 1000*60*60*24
                //one_hour means 1000*60*60
                //one_minute means 1000*60
                //one_second means 1000
                console.log(diffDays)
            }


            function secdiff(){
                let oldDate =new Date('2022-05-13T10:49:29.905Z')
                let newDate = new Date('2022-05-13T12:13:21.905Z')
                 let currentDate = new Date()
                console.log(oldDate)
                var secondBetweenTwoDate = Math.floor((newDate.getTime() - oldDate.getTime()) / 1000);
               


                 let test=new Date(currentDate.getTime() + 5291 * 1000);


                console.log(secondBetweenTwoDate ,test , currentDate)

            }




            

            // console.log(secdiff())
            
       
            // console.log( timeDiff(new Date("December 21, 2022 01:15:00:526") , new Date("December 23, 2022 01:15:00:526")))
            // console.log( timeDiff(new Date("December 21, 2022 02:00:00:526") , new Date("December 23, 2022 04:00:00:526")))
            // console.log( timeDiff(new Date("December 21, 2022 22:15:00:526") , new Date("December 23, 2022 23:15:00:526")))


function addDays(){
    let today = new Date()
           
    let test =today.getTime() + 1000 * 86400 * 1                     
    console.log("next date....." , today , new Date(test))

}

addDays()


           
    

            