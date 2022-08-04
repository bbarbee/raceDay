// Race start times

const adultEarly = "9:30 am"
const adultLate = "11:00 am"
const allYouth = "12:30 pm"

/*Early adults receive a race number at or above 1000.
All others receive a number below 1000.*/

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false

// let earlyRegistration = new Boolean(false)

let runnerAge = 20

if (earlyRegistration && runnerAge > 18){
    raceNumber += 1000;
}

if (earlyRegistration && runnerAge > 18) {
    console.log(`Your start time is ${adultEarly} and your race number is ${raceNumber}.`)
} else if (runnerAge > 18) {
    console.log(`Your start time is ${adultLate} and your race number is ${raceNumber}.`)
} else {
    console.log(`The youth race starts at ${allYouth}. Your race number is ${raceNumber}.`)
}

console.log(raceNumber)
console.log(earlyRegistration)
