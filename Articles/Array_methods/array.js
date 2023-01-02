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

 const runs=[0,1,2,3,4,5,6]

 let copyarray= runs.slice(0,3);
 console.log(copyarray);
 //clone array
 let clonearray=runs.slice();
 console.log(clonearray);//[0, 1, 2, 3,4, 5, 6]




