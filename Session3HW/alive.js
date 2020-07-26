alert(`This calculator is designed to give you the seconds, minutes, hours, days, weeks and months of how long you have been alive.`);


let startOver = 1;
while(Boolean(startOver)){

let agePrompt = +prompt(`How old are you?`);
console.log(agePrompt);
startOver=0

const hoursADay = 24;
const monthsPerYear = 12;
const weeksAYear = 52;
const minsPerHour = 60;
const secPerMin = 60;
const daysPerYear = 365;
const secsPerDay = secPerMin * minsPerHour * hoursADay
const minsPerDay = minsPerHour * hoursADay
const secsAlive = secsPerDay * daysPerYear * agePrompt;
let ageInfo;
console.log(secsAlive);
const minsAlive = minsPerDay * daysPerYear * agePrompt;
console.log(minsAlive);
const hoursAlive = hoursADay * daysPerYear * agePrompt;
console.log(hoursAlive);
const daysAlive = daysPerYear * agePrompt;
console.log(daysAlive);
const weeksAlive = weeksAYear * agePrompt;
console.log(weeksAlive);
monthsAlive = monthsPerYear * agePrompt;
console.log(monthsAlive);

ageInfo = document.querySelector(`#alivecalc`);
let titleInfo = document.querySelector(`.title`);
titleInfo.innerHTML= `<h2>Time Alive Calculator</h2>
    <h3>Instructions</h3>
    <p>Enter your age and the calculator will return the values in seconds, minutes, hours, days, weeks and months of how long you have been alive</p>
    <p>Based on your input of ${agePrompt}, you have been alive for :</p>`

alivecalc.innerHTML = `<p>${secsAlive} Seconds</p>
    <p>${minsAlive} Minutes</p>
    <p>${hoursAlive} Hours</p>
    <p>${daysAlive} Days</p>
    <p>${weeksAlive} Weeks</p>
    <p>${monthsAlive} Months</p>`


if(agePrompt <= 0){
    alert(`Invalid age. Try again.`);
    startOver=1
}
}