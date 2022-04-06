// get an element by ID
//const tittle = document.getElementById('para-tittle');
//console.log(tittle);
// get elements by their class name
//const errors = document.getElementsByclassNmae('error');
//console.log(errors)
//const para = document.querySeclector('body > h1');
//console.log(para);
// get element by their tag name
//const paras = document.getElementsByTagName('p');
//console.log(paras);
//console.log(paras[1]);
//const para = document.querySelector('p');
//consle.log(para.innerText);
// para.innerText ='ninjas are wesome'
//const paras = document.querySelectorAll('p');
//paras.forEach(para =>){
   // console.log(para.innerText);
   // para.innerText += 'new text';

//}}
//const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '>h2< THIS IS A NEW HTML H2</h2>'
//const people = ['hulu','lungi','jamai'];
//people.forEach(person =>){
    //content.innerHTML +='<p>${person}</p>';
//}};
//const content = document.querySelector('p');
//parseFloat.forEach()
//console.log(content.classlist);
//const link = document.querySelector('a');
//console.log(link.getAttribute('href'));
//link.setAttribute('href','http://www.thenetninja.co.uk');
//const mssg = document.querySelector('p');
//console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class','success');
//mssg.setAttribute('style','color: green;');
//const tittle = document.querySelector('h1');
//tittle.setAttribute('style','margin : 50px');
//console.log(tittle.style);
//console.log(tittle.style.color);
//tittle.style.margin = '50px';
//tittle.style.color = 'crimsom';
//tittle.style.frontSize ='60px';
//tittle.style.margin = '';
//const content = document.querySelector('p');
//console.log(content.classList);
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('success');
const paras = document.querySelectorAll('p');
paras.forEach(p=> {
  //console.log(p.innerText);
  if(p.textContent.includes('error')){
      p.classList.add('error');
  }
  if(p.innerText.includes('success')){
      p.classList.add('success');
  }
 } );
 const tittle =document.querySelector('.tittle');
 
 tittle.classList.toggle('test');
 tittle.classList.toggle('test');