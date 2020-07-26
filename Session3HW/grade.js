/* 

This is a calculator to give the user their average grade.
They can input up to five but no less than two different grades
to give them their results. If the wrong quantity of total grades is
input into the first prompt they get an alert telling them that it 
was an invalid input.

*/

let calc = document.querySelector("#gradecalc");
let prompt1;
let prompt2;
let prompt3;
let prompt4;
let prompt5;

// functions to give the average grade input/output and make the code less cluttered

function promptOne(){
    prompt1 = +prompt(`Please input grade 1: `);
}
function promptTwo(){
    prompt2 = +prompt(`Please input grade 2: `);
}
function promptThree(){
    prompt3 = +prompt(`Please input grade 3: `);
}
function promptFour(){
    prompt4 = +prompt(`Please input grade 4: `);
}
function promptFive(){
    prompt5 = +prompt(`Please input grade 5: `);
}

function myGrades(){
    if(avgGrade >= 97){
        console.log(`A+`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2> A+</h2>`
    }else if(avgGrade >= 93){
        console.log(`A`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>A</h2>`
    }else if(avgGrade >= 90){
        console.log(`A-`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>A-</h2>`
    }else if(avgGrade >= 87){
        console.log(`B+`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>B+</h2>`
    }else if(avgGrade >= 83){
        console.log(`B`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>B</h2>`
    }else if(avgGrade >= 80){
        console.log(`B-`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>B-</h2>`
    }else if(avgGrade >= 77){
        console.log(`C+`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>C+</h2>`
    }else if(avgGrade >= 73){
        console.log(`C`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>C</h2>`
    }else if(avgGrade >= 70){
        console.log(`C-`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p>
        <h2>C-</h2>`
    }else if(avgGrade >= 67){
        console.log(`D+`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>D+</h2>`
    }else if(avgGrade >= 63){
        console.log(`D`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>D</h2>`
    }else if(avgGrade >= 60){
        console.log(`D-`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p> 
        <h2>D-</h2>`
    }else {
        console.log(`F`);
        gradecalc.innerHTML=`<p>Your average grade is ${avgGrade}.</p>
        <h2>F</h2>`
    }
}

    /*

    This is where the user interaction begins

    */

    // A Boolean to start the code over if an invalid entry is detected

let startOver = 1;
while(Boolean(startOver)){

alert(`This average grade calculator can use up to five different grade totals.`);

let quantityGrades = prompt(`How many different grades do you have?`);

    /* 
    
    This code will run if the user wants to input two grades 
    
    */

if(quantityGrades.toUpperCase === `TWO` || quantityGrades === `2`){


    promptOne();
    promptTwo();
    let grades = [prompt1, prompt2];
    console.log(grades);
    
    total=0;
    for (let i=0;i<grades.length;i++){
        total= total+grades[i];
        console.log(total);
    }
    avgGrade = parseInt(total / grades.length);
    console.log(avgGrade);
    
    myGrades();
    startOver=0;

    /* 
    
    This code will run if the user wants to input three grades 
    
    */

}else if(quantityGrades.toUpperCase === `THREE` || quantityGrades === `3`){


    promptOne();
    promptTwo();
    promptThree();
    let grades = [prompt1, prompt2, prompt3];
    console.log(grades);
    
    total=0;
    for (let i=0;i<grades.length;i++){
        total= total+grades[i];
        console.log(total);
    }
    avgGrade = parseInt(total / grades.length);
    console.log(avgGrade);
    
    myGrades();
    startOver=0;
    
    /* 
    
    This code will run if the user wants to input four grades 
    
    */

}else if(quantityGrades.toUpperCase === `FOUR` || quantityGrades === `4`){


    promptOne();
    promptTwo();
    promptThree();
    promptFour();
    let grades = [prompt1, prompt2, prompt3, prompt4];
    console.log(grades);
    
    total=0;
    for (let i=0;i<grades.length;i++){
        total= total+grades[i];
        console.log(total);
    }
    avgGrade = parseInt(total / grades.length);
    console.log(avgGrade);
    
    myGrades();
    startOver=0;

    /* 
    
    This code will run if the user wants to input five grades 
    
    */

}else if(quantityGrades.toUpperCase === `FIVE` || quantityGrades === `5`){


    promptOne();
    promptTwo();
    promptThree();
    promptFour();
    promptFive();
    let grades = [prompt1, prompt2, prompt3, prompt4, prompt5];
    console.log(grades);

    total=0;
    for (let i=0;i<grades.length;i++){
        total= total+grades[i];
        console.log(total);
    }
    avgGrade = parseInt(total / grades.length);
    console.log(avgGrade);

    myGrades();
    startOver=0;

}else {
    alert(`Invalid entry. Try again.`);
    console.log(`Invalid entry`);
    startOver=1;
}
}