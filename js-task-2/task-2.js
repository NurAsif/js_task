//say

const naes = ['shaun','mario','luigi'];
for(let i=0;i<naes.length;i++){
    //console.log(names[i]);
    let html = `<div>${naes[i]}</div>`;
    console.log(html);
}
 
 
//while loop
 
const names=['shaun','mario','luigi'];
 
let i=0;
while(i<5){
   console.log('in loop',i);
      i++;
}
let i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}
 
//do while loop
 
let i=4;
do{
    console.log('value of i is ',i);
    i++;
}while(i<5);
 
//if statement
 
const age=25;
if(age>20){
    console.log('you are over 20 yerars of age');
}
const ninjas=['billu','jamai','hulu','kau'];
if (ninjas.length>3){
    console.log('that\'s a lot of ninjas');
}
const password ='password12345';
if(password.length>=12){
    console.log('that password is mighty strong');
}else if(password.length>=8){
    console.log('that password is long enough');
}else{
    console.log('password is not long enough')
}
 
 
 
//logical operators -OR || AND &&
const password='p@ssword12345';
if(password.length>=12 && password.includes('@')){
    console.log('that password is mighty strong');
}else if(password.length>=8 || password.includes('@') && password.length>=5){
    console.log('that password is strong enough');
}else{
    console.log('password is not strong enough')
}
 
 
//logical NOT(!)
let user = false;
if(!user){
    console.log('you must be logged in to continue');
}
console.log(!true);
console.log(!false);
 
 
//break and continue
const scores = [50,25,0,30,100,20,10];
for(let i=0;i<scores.length;i++){
 
    if(scores[i]===0){
        continue;
    }
 
    console.log('your score: ',scores[i]);
    if(scores[i]===100){
        console.log('congrates!you got the top score.');
        break;
    }
}
 
 
//switch statements
 
const grade='D';
switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
                break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade.');
}
 
 
 
//variable &block scope
let age=30;
let name='Sam';
if(true){
    age=40;
    let name='Shaun';
    console.log('inside 1st code block: ',age,name);
    if(true){
        let age=50;
        console.log('inside the 2nd block: ',age);
    }
}
console.log('outside 1st code block: ',age,name);