const cluster=require('cluster');
const express=require('express');
const {availableParallelism}=require('os');
const process=require('process');
const app=express();
const numCPUs=availableParallelism();
if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    // Workers can share any TCP connection
    // In this case it is an HTTP server
   app.listen(8000,()=>{

       console.log(`Worker ${process.pid} started`);
   });
  
  }

// function  test(){
//     b=new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("I am here");
//             resolve(22);
//         },2000)
//     });

// }
// test();
// b.then((data)=>{
//     console.log("Data resolved",data)

// })

