console.log("Hi! APJ");

// //Array Methods

// const array=[8,19,15,9];

// array="apj";

// console.log(array);

// let a=10;
// a="apj";
// console.log(a);
// let a=[];
// let arrayofdifferentdatatype=["APJ",8,19,"Akshay",true];
// //console.log(arrayofdifferentdatatype);

// //Lenght
// a=5;
// console.log(a);
// // console.log(array.length);
// //Adding/rwemoving element

//  const length= array.push(12,15,21);

// //console.log(length);
//  console.log(array);

//Empty Array

// const arr=[];  //This is recommended

// //or
// const arr1= Array();

// const numbers=[1,2,3,4,0.5,68];

// const tech=["node","angular","react","CSS"];

// //Array can have different data types

// const customer=[
//     "akshay",
//     30,
//     0.25,
//     true,
//     {
//         'country':india,
//         'city':india
//     }
// ]


// let js = 'JavaScript'
// const jsarray= js.split('')

// console.log(jsarray); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']

// let txt = 'JavaScript is best programming language'
// const txtarray= txt.split(' ');
// console.log(txtarray); //[ 'JavaScript', 'is', 'best', 'programming', 'language' ]


//Access elements

// const numarray=[10,12,56,14,8,7];

// console.log(numarray[0]);//10
// console.log(numarray[2]);//56
// console.log(numarray[4]);//8


// const numarray=[10,12,56,14,8,7];

// numarray[0]="modified";

// console.log(numarray); //[ 'modified', 12, 56, 14, 8, 7 ]

// const numarray=[10,12,56,14,8,7];
// console.log(numarray.length); // 6

// const strarr=["items1","item2","item3"];

// strarr.push("new Item");

// console.log(strarr);//[ 'items1', 'item2', 'item3', 'new Item' ]

// strarr.push("item5",6);

// console.log(strarr); //[ 'items1', 'item2', 'item3', 'new Item', 'item5', 6 ]

// const strarr=["items1","item2","item3"];

// strarr.unshift("at start");

// console.log(strarr);//[ 'at start', 'items1', 'item2', 'item3' ]


// const strarr=["items1","item2","item3"];

// let lastelement=strarr.pop();
// console.log(lastelement);//item3
// console.log(strarr);//[ 'items1', 'item2' ]


// const strarr=["items1","item2","item3"];

// let element=strarr.shift();
// console.log(element);//items1
// console.log(strarr);//[ 'item2', 'item3' ]

//Splice
// const runs=[32,57,12,48,81,99];

// let deleteelement= runs.splice(1,2); 
// console.log(deleteelement);//[ 57, 12 ]
// console.log(runs);//[ 32, 48, 81, 99 ]


// const run=[0,1,2,3,4,5,6];

// run.splice(1,2,99,99,99);
// console.log(run); //[ 0, 99, 99, 99,3,  4,  5,  6]

// const run1=[0,1,2,3,4,5,6]c
// run1.splice(3,1,88,88,"new-elements");
// console.log(run1);// [ 0, 1, 2, 88, 88, 'new-elements', 4, 5, 6 ]

//  const runs=[0,1,2,3,4,5,6]

//  let copyarray= runs.slice(0,3);
//  console.log(copyarray);
//  //clone array
//  let clonearray=runs.slice();
//  console.log(clonearray);//[0, 1, 2, 3,4, 5, 6]

// const score=[10,12,15,20,10,10,35,40];
// console.log(score.indexOf(12)); //1 => 12 present at position 1
// console.log(score.indexOf(99));// -1 => not exist
// console.log(score.indexOf(10));// 0 => first occourance of that element
// console.log(score.indexOf(10,1));// 4 => it will start search from index 1

// const numbers = [1, 2, 3, 4, 5, 3, 2]

// console.log(numbers.lastIndexOf(2)) // 6 => last occurance of 2
// console.log(numbers.lastIndexOf(0)) // -1 => not exist
// console.log(numbers.lastIndexOf(4)) //  3 => index of 4 

// const numbers=[12,15,18,95,58,42,63];
// console.log(numbers.includes(12));// true =>exist in array
// console.log(numbers.includes(99));// false => not exist
// console.log(numbers.includes(12,1));// false it will start search from index 1

// const numbers=[2,3,4];
// let num= numbers.map( r => r*5);
// console.log(num);
// console.log(numbers);

// let numbers = [1, 3, 5];

// let result = numbers.every( e  => e > 0);

// console.log(result);

// const str=[1,2,3];
// console.log(str.join(' '));// join by space 1 2 3
// const str1=["a","p","j"];
// console.log(str1.join('$'));//join by doller a$p$j

// const odds = [1,3,5];
// const evens = [2,4,6];
// // merge odds and evens array
// const combined = odds.concat(evens);//
// console.log(combined);// new array=>[ 1, 3, 5, 2, 4, 6 ]
// console.log(odds);//[ 1, 3, 5 ]
// console.log(evens);//[ 2, 4, 6 ]

// const circles = [3, 5, 9];
// // let areas = circles.map(circleArea);
// let areas= circles.map((r)=> 3*r*r);
// console.log(areas);//[ 27, 75, 243 ]

// const number =[2,4,3];
// let iseven= number.map(n => n%2==0);
// console.log(iseven);//[ true, true, false ]


// let num = [10,12,-5,-9,5,-9,52,-8];
// ///array of positive numbers
// let positiveNumbers = num.filter(n=> n>0);
// console.log(positiveNumbers);//[ 10, 12, 5, 52 ]

// let numbers = [1, 3, 5];

// console.log(numbers.some(n => n<2));//false

const stringArray=['z','w','a','d'];
stringArray.sort();
console.log(stringArray);//[ 'a', 'd', 'w', 'z' ]
const numArray=[10,5,12,84,25];
//if we use only sort 
numArray.sort();
console.log(numArray);// [ 10, 12, 25, 5, 84 ]
//For number array we use compare funtion

numArray.sort((a,b)=>a-b);
console.log(numArray);// 5, 10, 12, 25, 84 ]
















