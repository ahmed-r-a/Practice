// /*let name == prompt("whats your name ")
// alert(`you name is ${name}`); */
// /*console.log("hello")
// */
// /*5 > 4 true
// "apple" > "pineapple" false
// "1" > "11" true
// undefined == null false
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n"false
// // */
// // let age ==prompt("How old are you")
// // if (!(age >==14 && age <==90))
// //     alert("age is not between 14 and 90 inclusively.")
// // else
// //     alert("age is  between 14 and 90 inclusively.")
// let Vistor = prompt("Who's there?","")

// if(Vistor=="Admin"){

//     let Password=prompt("Password:",)

//     if(Password=="TheMaster")
//     alert("Welcome")

//     else if(Password=="" || Password == null){

//         alert("Canceled")
//     }

//     else
//     {

//         alert("Wrong password")}

//     }
// else if(Vistor=="" || Vistor== null){
//     alert("Canceled")
// }
// else{
//     alert("I don't know you")
// }
// let i = 2;
// do {
//   console.log( i );
//   i++;
// } while (i < 1);
// let x = 2;
// while (x < 1) { // shows 0, then 1, then 1
//   console.log( x );
//   x++;
// }
// for(let num = 2; num > 10;i++);{
//     if(num % 2){
//         console.log(num);

//     }

//     }
// let i = 0
// while(i<3){
    
//     console.log("number:",i)
//     i++
// }
// do{
// numb=prompt("Enther number should be greater than 100")
// if (numb>100){
//     alert("thanks")
// }

// }while(numb<101)
// for(let  num =0; num<10; num++){
//     if(num % 2 ==3)
//     alert(num)
// }
// let n = 100

// nextprime:
// for (let i = 2 ; i <= n ; i++){
//     for(let x = 2 ; x < i; x++){
//         if (i % x ==0)continue nextprime;
//     }
//     console.log(i)
//     }
// let browser=prompt("what yor browser",)
// if(browser=='Edge'){
//     alert( "You've got the Edge!" );
// }
// else if (browser=="Chrome"||browser=="Opera"||browser=="Safari"||browser=="Firefox"){
// alert( "Okay we support these browsers too" );
// }
//     else{
//     alert( "We hope that this page looks ok!" );
// }
// let a = +prompt("a?","")
// switch(a){
//     case(0):
//     alert(0)
//     break;
//     case(1):
//     alert(1)
//     break;
//     case(2):
//     case(3):
//     alert("2,3")
//     break;
//     default:
//     alert("error")

// }
// function showMessage() {
//   alert( 'Hello everyone!' );
// }
// showMessage()
// function showMessage(from, text) {
//   if (text === undefined) {
//     text = 'no text given';
//   }

//   alert( from + ": " + text );
// }
// showMessage()

// function checkage(age){
// return(age>18?? confirm('Did parents allow you?')  )
// }
// let a=0
// let b=0
// function min1(a,b){

// if (a>b)
// {
//     alert("b is less then a ")
// }
// if(a<b)
// {
//        alert("a is less then b ")
// }
//          return("Error")
// }
// min1(-3,2)
// function min1(a,b){

// if (a>b)
// {
//     return a;
// }
// else
// {
// return b;
// }

// }
// min1(-3,2)
// function pow1(x,n)
// {
//     return(x**n)
// }
// alert(pow1(3,2))

// function pow1(x,n){
//     let reslut =x
//     for (let i = 1;i<n;i++){
//         reslut *=x
//     }

//     return(reslut)

// }

// let x = prompt("Number 1","")
// let n = prompt("Number 2","")

// if (n<1){
//      alert(`Power ${n} is not supported, use a positive integer`);
// }
// else{
//     alert(pow1(x,n))
// }
// pow1
// function sayHi() {   // (1) create
//   alert( "Hello" );
// }

// let func1 = sayHi;    // (2) copy

// func1(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)
// let sum=function(a,b){
//     return a + b;
// }
// sum(1,2)
// sayhi("ahmed");

// function sayhi(name){
// alert(`Hello ${name}`)
// }


//  function Calculation(){
//       let num1=+prompt("the number 1",0)
//  let num2=+prompt("the number 2",0)
//  let cal=prompt(`
//      1-add
//      2-nav
//      3-mlut
//      4-div
//      `,0)
//  let results = 0
//      function add(num1, num2){
//      results=num2 + num1
//  alert(`${num2}+${num1}=${results}`)  
//  }
//  function navv(num1, num2){
//      results=num2 - num1 
//  alert(`${num2}-${num1}=${results}`)  
    
//  }
//  function mult(num1, num2){
//      results=num2 * num1
//  alert(`${num2}X${num1}=${results}`)  
    
//  }
//  function div(num1, num2){
//      results =num2 / num1
//  alert(`${num2}/${num1}=${results}`)   
//  }
//  switch(cal){
//  case("1"):
//  add(num1,num2,results)
//  break;
//  case("2"):
//  navv(num1,num2,results)
//  break;
//  case("3"):
//  mult(num1,num2,results)
//  break;
//  case("4"):
// div(num1,num2,results)
//  break;
//  }
// }
// Calculation()
// console.log("Hello")
// function pow(x , n){
//     let reslut = 1
//     for (let i = 0 ; i < n ; i++)
//     {
//     reslut *= x;
//     }
//     return reslut;
// }
// let x=+prompt("number1",)
// let n=+prompt("number2",)
// if(n <= 0)
// {
//     alert(`power ${n} is not supported, please enter an integer number greater then 0`)
// }
// else
// {
//     alert(pow(x,n))
// }
// let numb=+prompt("Enther the number")
// function iseven(numb){
// if(numb %2 == 0)
// {
//      return alert(`${numb} is even`);
// }

// else if(numb %2 == 1)
// {
// alert(`${numb} is  not even`)
// }
// else{
//     return false;
// }
// }
// iseven(numb)
//   let britheday = +prompt("type your year brithdays:",0)
//   let today = +prompt("what years is it?:",0)
// function agecount(){
//   alert(today -britheday)
// }
// agecount(britheday,today)
//1
 
 function agecount(){
let britheday =+prompt("type your year brith:",0)
 const today = new Date();
 const yearonly = today.getFullYear()

alert(yearonly - britheday) 
 }
// agecount()

//2

//3

let number = 42
let type = typeof(number)
alert(type)

//4

function BMI1(){
    
let weight = + prompt (" what your weight " , 80 )
let height = + prompt (" what your height " , 166 )
let height2 = height ** 2
    let cal = weight/ height2 * 10000
    bmical=parseInt(cal)
    if (bmical < 26 && bmical > 17)
    {
        alert(` normal:${bmical}`)
    }
    else if (bmical > 25 ) 
    {
        alert(` fat:${bmical}`)
    }
    else if( bmical < 18)
    {
         alert(` skelton?:${bmical}`)
    }
    else
        alert(bmical)
}
//BMI1()
//5
function Boolean1(){
let number1 = 42
//alert(!!number1)true
alert(Boolean(number1))
let String1 = "42"
//alert(!!String1) true
alert(Boolean(String1))
let String2 = ""
//alert(!!String2) false
alert(Boolean(String2))
let number2 = 0
//alert(!!number2)false
alert(Boolean(number2))
}
// Boolean1()
function ugrade(){
let grade = +prompt("what yor grade",100)
if (grade >94)
{
    alert("A+")
}
else if(grade >89 &&grade <95 )
{
    alert("A")
}
else if(grade >84 &&grade <90 )
{
    alert("B+")
}
else if(grade >79 &&grade <85 )
{
    alert("B")
}
else if(grade >74 &&grade <80 )
{
    alert("C+")
}
else if(grade >69 &&grade <75 )
{
    alert("C")
}
else if(grade >64 &&grade <70 )
{
    alert("D+")
}
else if(grade >59 &&grade <65 )
{
    alert("D")
}
else {
    alert("F") 
}

}
// 7

function factorial(){
    let number= + prompt("Enter Number",0)
    let results2 = 1
    for (let i = number ; i >= 1 ; --i)
    {
       results2 = results2 * i
    }
            
             alert(results2) 
}





























function factorial1(){
    let numbers2 = + prompt("NUMber",0)
    let reslut12 =1 
    
    
    for(let i; i >= 1 ; --i){
         reslut12 = reslut12 * i

    }

    alert(results2)
}
factorial1()