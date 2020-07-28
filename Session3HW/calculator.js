/*

This is a very basic calculator. I want to eventually be able to create a real calculator and will flesh this out as I learn more.

*/


let calc = document.querySelector(`#calc`);
let calcInfo = document.querySelector(`.title`);

alert(`This is a basic calculator. Input two numbers and it will display the results.`);

let startOver=1;
while(Boolean(startOver)){

let prompt1 = +prompt(`Input the first number.`);
console.log(prompt1);
let prompt2 = +prompt(`Input the second number.`);
console.log(prompt2);
let totalAdd = prompt1 + prompt2;
let totalSub = prompt1 - prompt2;
let totalMulti = prompt1 * prompt2;
let totalDiv = prompt1 / prompt2;
startOver=0;
calcInfo.innerHTML=`
    <h2>Calculator</h2>
    <h3>Instructions</h3>
    <p>Input two numbers and the calculator will return the results</p>
    <p>The results from your inputs ${prompt1} and ${prompt2} :</p>`

calc.innerHTML= `
    <p>${prompt1} + ${prompt2} = ${totalAdd}</p>
    <p>${prompt1} - ${prompt2} = ${totalSub}</p>
    <p>${prompt1} * ${prompt2} = ${totalMulti}</p>
    <p>${prompt1} / ${prompt2} = ${totalDiv}</p>`

    console.log(`${prompt1} + ${prompt2} = ${totalAdd}`);
    console.log(`${prompt1} - ${prompt2} = ${totalSub}`);
    console.log(`${prompt1} * ${prompt2} = ${totalMulti}`);
    console.log(`${prompt1} / ${prompt2} = ${totalDiv}`);
    if(isNaN(prompt1) || isNaN(prompt2)){
        alert(`Invalid input. Try again.`);
        startOver=1;
    }
    if(prompt2 === 0){
        alert(`Cannot divide by 0. Try again.`);
        startOver=1;
    }

}
