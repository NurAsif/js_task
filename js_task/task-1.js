et age = 25;
let year = 2019;
// logs things to console
console.log(age,year);
/*comment */
age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

//Strings
console.log("Hello world");
let email = "fuck121@diu.edu.bd"
console.log(email);

//string concatenation

let firstName = 'jogga';
let secondName = 'mogga';

let fullName = firstName + " " + secondName;
console.log(fullName)

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//stirng methods
console.log(fullName.toUpperCase());
let result = fullName.toUpperCase();
console.log(result , fullName);

let index = email.indexOf("@")
console.log(index);

//common string methods

 email = 'fuckis@gmll';

 let res = email.replace('k','w');
 console.log(res);

let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// math operator + , -,/,**,%
console.log(10/20);
let re = radius % 3;
let r = pi * radius **2;
console.log(re);
console.log(r);

//order of operators - B I D M A S
let g = 5*(10-3)**2;
console.log(g);
let likes=10;

//likes = likes +1;
//likes++;
// likes--;
//likes +=10;
//likes -=5;
//likes /=2;
console.log(likes);
//NaN - not a number

//templete strings
const title = 'best reads of 2019';
const author = 'Mario';
const like = 30;

//concatenation way 
let b = 'the blocked called'+title+'by'+author+'has'+like+'likes';
console.log(b);

//template string way
let rrr = `The blog called ${title} by ${author} has ${like}likes`;
console.log(rrr);

//creating html templetes
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog us ${likes}</span>
`;
console.log(html);

//Array
let ninjas = ['sinthia','ry','hh'];
console.log(ninjas);
console.log(ninjas[2]);
ninjas[1]= 'pepsi'
console.log(ninjas);
let ages=[10,25,1000,369]
console.log(ages);
let haha = [10,'ry']
console.log(haha);
console.log(ninjas.length);


//Array method
let met = ninjas.join('.');
console.log(met);
let ind = ninjas.indexOf('hh');
console.log(ind);
let con = ninjas.concat(['joey']);
console.log(con);
let pt = ninjas.push('ken');
console.log(ninjas);
let pop = ninjas.pop();
console.log(ninjas);

//undefinied
let gogo ;
console.log(gogo , gogo+3 , `the age is ${gogo}`);

//Null
let gogoo = null;
console.log(gogoo , gogoo+3 , `the age is ${gogoo}`);

//booleans
console.log(true,false,'true','false');

//method can return 
let em = 'dfhfh@.co.uk';
let dfj = ['fy','yu','uiy'];
let gg = dfj.includes("hu");
let fdd = em.includes('@');
console.log(fdd);
console.log(gg);

//comparisn operators 
let a = 20;
console.log(a ==25);
console.log(a==30);
console.log(a!=25);
console.log(a>25);
console.log(a<25);
console.log(a>=25);
console.log(a<=25);

let u = 'shaun';
console.log(u == 'shaun');
console.log(u== 'Shaun');
console.log(u > 'crystal');

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