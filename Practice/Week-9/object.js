// const obj={
//     name:'akshay',
//     place:'karad',
//     male:true,
//     age:27,
// }
// let bvalue=5;
// Object.defineProperty(obj,'bank',{
//     get: () => 5 ,
//     set: ()=> newValue,
// })

// console.log(obj);
// console.log(Object.getPrototypeOf(obj));
// console.log(obj.bank);
// obj.bank=6;
// console.log(obj.bank);


// var circle = {
//     radius: 10,
//     area: function () {
//         return Math.PI * this.radius * this.radius;
//     }
// };

// console.log(circle.area());                // => 314.15..
// console.log(typeof circle.area);           // => function


// const obj5 = {
//     comics : 'marvel',
//     pen: '',
//     printComic: function(){
//         this.pen += '🖊️🗒️'
//          return console.log(this);

//         // return this;
//     },
//     // printaComic: () => {
//     //     // this.pen += '🖊️🗒️'
//     //     console.log(this);

//     // },   
// }

// console.log(obj5.printComic());



//Part-1
const obj1={
    name:'Akshay',
    place:'karad',
    arr:[1,2,3,4],
    married:false,
    bank:{
        branch:'karad',
        bankname:'BOI'
    }
}
// itrating through object;

// for (key in obj1) {
//     console.log(key);
//     console.log(obj1[key]);
// }

//creating object 
//  const obj2=new Object();
//  obj2.name="akshay";
//  obj2['place']='karad';

//  console.log(obj2);
//  delete obj2.place;
//  console.log(obj2);

//object creation from another object

const hero={
    marval:'Iron Man',
    dc:'superman'
}

const obj3= Object.create(hero);


obj3.dc="king";
console.log(obj3);
console.log(Object.getPrototypeOf(obj3));




