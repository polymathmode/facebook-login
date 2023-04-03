// let a=[4,8,15,12,14,9]
// a.pop()
// console.log(a)


// function sayHello(name){
// console.log('hello '+ name)
// console.log('-------'+name)
// console.log('------')

// }

// sayHello('com')
// sayHello('ville')
// sayHello('ndu')

// function calculateTax(amount){
// let result=amount*2
// return result
// }
// let tax=calculateTax(100)
// console.log(tax)

// // // function within a function
// // setTimeout(function(){
// //     console.log('I waited two seconds')},2000);

// setTimeout(function(){console.log('Take two seconds')},2000);


// let counter=0;
// function timeout(){
//     setTimeout(function(){
//         console.log('Hi'+counter++)
//         // timeout()
//     },2000
//     )
// }

// timeout()


// (function(){
//     console.log('iife')
// })();
// counter=0
// function timeout(){
//     setTimeout(function(){
//         console.log("count "+counter++ ),2000
//     timeout()
//     })
// }
// timeout()

//Switch Statement
// let hero='Batman'
// switch (hero.toLowerCase()){
//     case 'superman':
//         console.log('xray-vision');
//         console.log('super-strength');
//         break
//     case 'batman':
//         console.log('intelligence');
//         console.log('stealth');
//         break
//     default:
//         console.log('Member of the JLA');

// }

//Ternary Operator
// let electericity= false;
// let nepa=true
// let result=(electericity==nepa) ? 'yes':'no'
// console.log(result)
//Strict equality & Strict Inequality
// let Nigeria= '2';
// let USA=2
// let answer=(Nigeria!==USA) ? 'yes':'no';
// console.log(answer)

// let a=[3,5,6,9,4,2]
// for (let i = 0; i < a.length; i++)
//  {
//     console.log(a[i])
//     if(i==a[4])break;
    
// }

// let x=1
// while(x<10){
//     console.log(x++)
//     if(x==7)break
// }

// function one(){
//     return 'one'
// }

// let value=one
// console.log(value())


// function two(){
//   return  function (){
//     console.log('two')
//     }
// }
// let result=two()
// result()


//Object Literals
// let Car={
//     make:'bmw',
//     model:'74li',
//     year:2010,
//     getPrice:function(){
// return 5000;    },
// printDescription:function(){
//     console.log(`${this.make} ${this.model}`) 
// }

// }
// Car.printDescription();
// console.log(Car.year)

// // Hack for adding properties to an object
// let anotherCar={}
//     anotherCar.whatEver='ndy';
// console.log(anotherCar.whatEver)


// let a={
//     myProperty:{
//         name:'schl',
//         color:'blue'
//     },

// }
// console.log(a.myProperty.color)

// let b={
//     myProperty:[
//         {d:'get'},
//         {e:'very'},
//         {f:'crazy'},
//         {g:'early'}
//     ]
// }
// console.log(b.myProperty)


//Module Pattern

// var counter=(function(){
//      //private stuff
//      let count =0;
//      function print(message){
//         console.log(`${message} ${count}`);
//      }

//      //return an object
//      return{
//         // value:count,
//         get:function(){
//             return count
//         },
//         set:function(value){
//             count=value
//         },
//         increment:function(){
//             count+=1 ;
//             print('After Increment: ')
//         },
//         reset:function(){
//             print('Before reset: ');
//             count=0
//             print('After reset: ');
//         }
//      }

// })();

// counter.increment()
// counter.increment()
// counter.increment()
// counter.set(7)
// // console.log(counter.value)
// counter.reset()
// console.log(counter.get())



//Javascript Closures
// function sayHello(name){
//     return function(){
//         console.log('howdy '+ name)
//     }
// };
// let bob=sayHello('bob')
// let grant=sayHello('grant')
// let conrad=sayHello('conrad')
// bob();
// grant();
// conrad();

//Javascript 'this' keyword//

// function first(){
//     return this;
// }
// console.log(first()===global);


// function second(){
//     'use strict' ;
//     return this;
// }
// console.log(second()===undefined);

// 


// function fifth(){
//     console.log(`${this.firstName}${this.lastName}`)
// }

// let customer1={
//     firstName:'Ndu',
//     lastName:'Ulenu',
//     print:fifth
// }
// let customer2={
//     firstName:'Emma',
//     lastName:'Ulenu',
//     print:fifth
// }
// let customer3={
//     firstName:'Op',
//     lastName:'Ulenu',
//     print:fifth
// }
// customer1.print();
// customer2.print();
// customer3.print();


//Javascript Destructuring
// let a,b,c,d,e;
//   let names=['davis','peter','eddie','mike','sammy'];
//  [a,b,c,e,d]=names;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let others;
// [a,b,...others]=names;
// console.log(a)
// console.log(b)
// console.log(others)


// let year,model;
// ({year, model}={
//     make:'bmw',
//     model:'745li',
//     year:2010,
//     value:5000,
// });
// console.log(year)
// console.log(model)

//Regular Expressions
 let pattern=/xyz/;
console.log(pattern)
console.log(typeof pattern)
 let value='This is xyz a test';
//  console.log(pattern.test(value))
//  console.log(value.replace(pattern,'just'))
 console.log(value.match(pattern,))























