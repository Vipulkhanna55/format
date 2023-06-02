// import express from 'express';
// import unauthorized from '../core/routes/unauthorized';
// const app:express.Express=express();
// unauthorized(app);


// app.listen(5050,()=>{
//     console.log("Listening on port 5050")
// })
// import express from 'express';
// import mongoose from "mongoose";
// const  app:express.Express=express();
// const Schema = mongoose.Schema;
// function connectdatabase():void{
// const MONGO_URI:string='mongodb+srv://admin-sameer:16122000@cluster0.flijlqq.mongodb.net/typescriptAPI';

// mongoose.connect(MONGO_URI).then(()=>{
//     console.log("Connection successfull")
// }).catch((error)=>{
//     console.log("Connection error");
// });



// }
// connectdatabase();

// const BlogPost = new Schema({
//     title:{type: String},
//     body: {type:String},
//     date: {type:Date,default:Date.now()},   
//   });
//   const blogpost=mongoose.model('blogPost',BlogPost);


// app.get('/apiGet',(request:express.Request,response:express.Response<string>):void=>{
//     const data=new blogpost({
//         title:"Major",
//         body:"rajdheer"
//     });
//     data.save().then((data)=>{console.log("Saved  successfull");
//     }).catch(()=>{console.log("Connection error");});
//     response.send("Sending from inside in the name of love in the name of love ");
// })

// app.listen(5000,()=>{
//     console.log("Listening on port 5000");
// });

// const name:string="Name 1";
// interface User{
//     name:string;
//     age:number
// }
// function temp2():User{      
//     return {name:"Hello there",age:32}

// }
// console.log(temp2());
// let name:string="Name 2";//explicit type:string


// let name1:string[]=["23"];//array type value used to define the value inside the array type

// let index:(string | number)[]=[];//Known as union types in typescript ALlocating the value inside will be either a number or an  string inside it 
// index.push(22);
// console.log(index);


// let name3:{
//     name:string,
//     age:number,
//     class:boolean
// }={
//     name:"years",
//     age:33,
//     class:false
// }
// name3={
//     name:"years",
//     age:33,
//     class:false
// }
// console.log(name3);


    // let hereName:Function=(a:number,b:number,c?:number)=>{
    //     return c !=undefined?(a+b+c):a+b;

    // }
    // console.log(hereName(1,2));


    // let numberCalc:(name:string,age:number)=>void;
    // let getData:(name:string,age?:number)=>string;

    // numberCalc=(name:string,age:number)=>{
    //     console.log(`Here with ${name}`);

    // }
    // getData=(trello:string)=>{
    //     return trello;
    // }
    // numberCalc("Hello",22);
    // console.log(getData("Hello"));


// let name1:(object1:{name:string,age:number})=>{name:string};

// name1=({name:string})=>{
//     return {name:"Hello"}
// }

// type person={name:string,age:number};
// let getVal:(name:person)=>person;
// getVal=(name:person)=>{
//     return name;
// }
// const age22:person=getVal({name:"Here",age:23});
// console.log(`Age of the use is ${age22}`,getVal({name:"Here",age:23}));


// class Invoice{
//     readonly name:string;
//    public client:string;
//     private amount:number;
//     protected Range:string

//     constructor(c:string,a:number,n:string,r:string){
//         this.name=n;
//         this.client=c,
//         this.amount=a;
//         this.Range=r;
//     }
//     getAmount(){
//         return `The values ar ${this.name} , ${this.client} ,${this.amount} ,${this.Range}`
//     }
// }
// //Can also define an constructor like constructor(   readonly name:string;public client:string;private amount:number;protected Range:string)
// const inv1=new Invoice("Hero",2300,"My","Range");
// const inv2=new Invoice("Hero2",23002,"My","Range2");

// let Invoices:Invoice[] =[];
// Invoices.push(inv1,inv2);
// Invoices.forEach(inv=>{
//     console.log("Invoice",inv.getAmount());
// })


// console.log(`Invoice`,inv1);//Returns all the variables that are present in the value of the Invoice    
//This class is used to fetch all the values of the Invoice possible 
//Code flow works all together  with access specifiers public private and protected with readOnly as an exception in the case 


// type user={
//     name:string
// }

// const newFunction=<T extends user>(obj:T)=>{//This is generic now it tells it tells it to take any input and return type willl be that input if returned by it 
//     return {...obj,uuid:23};

// }

// let data=newFunction({name:"Hello there",age:23,claaasss:"OUt "});
// let data=newFunction({name:"age going",age:23,class:3});


// console.log(data);

// interface Invoice<t>{
//     name:string,
//     team:t,
//     cnastack:string
// }

// const number=():Invoice<string[]>=>{
//     return {name:'hello there',team:["33","44"],cnastack:'33'}
// }
// console.log(number());



// type name={
//     age:number
// };
interface name{
    age:number;
    class:boolean
}
const here:name={age:32,class:true};
console.log(here);
