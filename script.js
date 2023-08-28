const he =document.getElementById("he")
const he2 =document.getElementById("he2")
const he3 =document.getElementById("he3")
//const text =document.createTextNode("hellop")
//he.appendChild(text)
// el.appendChild(he)
const setError = (element,message) =>{

const inputControl= element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerHTML = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');

}

const setSuccess = element =>{
const inputControl= element.parentElement;
const errorDisplay = inputControl.querySelector('.error');
console.log(errorDisplay)
errorDisplay.innerText ='';
inputControl.classList.add('success');
inputControl.classList.remove('error');
}




var form= document.getElementById("form")

form.addEventListener("submit",function (event){
event.preventDefault()
var date = document.getElementById("date")
var month = document.getElementById("month")
var year = document.getElementById("year")
var d1 = document.getElementById("date").value
var m1 = document.getElementById("month").value
var y1 = document.getElementById("year").value
var mon = [31,28,31,30,31,30,31,31,30,31,30,31];
var month_n = [31,28,31,30,31,30,31,31,30,31,30,31];
console.log(mon)
console.log(month_n)
let checkDate 
let checkMonth
let checkYear

var new_date = new Date();
var d2 = new_date.getDate();
var  m2 = 1+ new_date.getMonth();
var y2 = new_date.getFullYear();

// validation date
if(d1== "" ){
  setError(date,'This field required')
  console.log("date is empty")
  checkDate = 'n'
}

else if( d1 >month_n[m1-1] || d1<1 || d1>31){
    console.log(`${month_n[m1-1]}`)
    console.log("jai ho")
  setError(date,'valid date required');
   checkDate = 'n'
   console.log(checkDate)
}else{
    console.log(month_n[m1-1])
  setSuccess(date);
  checkDate='y'
  console.log(checkDate)
}
// validation month
if(m1=== "" ){
  setError(month,'this field required');
  checkMonth='n'
}
else if( m1 >12 || m1<1){
  setError(month,'valid month required');
   checkMonth='n'
   console.log(checkMonth)
}else{
  setSuccess(month);
  checkMonth='y'
  console.log(checkMonth)
}

// validation year
if(y1=== ""){
  setError(year,'this field is required');
  checkYear='n'
}
else if(  y1 >y2 || y1.length<4){
  setError(year,'must be in the past');
  checkYear='n'
  console.log(checkYear)
}else{
  setSuccess(year);
  checkYear='y'
  console.log(checkYear)
}





//calculate age

if(checkDate==='y'&&checkMonth==='y'&&checkYear ==='y'){
if(d1 > d2){
d2= d2 + month_n[m2-1];
m2= m2-1;
}

if(m1 > m2){
m2= m2 + 12;
y2 = y2 - 1;
}

var d =d2 -d1;
var m =m2 -m1;
var y = y2 - y1;



// he.appendChild(text)
he.textContent=` ${d}   `
he2.textContent=` ${m}   `
he3.textContent=` ${y}   `}

}) 

