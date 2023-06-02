import express from 'express';
const route=express.Router();
route.get('/',(request:express.Request,response:express.Response)=>{
    response.send("Sending the response in typescript");

});
export default route;