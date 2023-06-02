import express from "express";
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express";
import  {router} from '../routes/routes.js';
import { __dirname } from "../temp.js";
console.log(__dirname);

const app = express();

const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Swagger API Documentation',
            version:'1.0.0'

        },
        servers:[{
            url:'http://localhost:5000'
        }]


    },
    apis:[__dirname+'/routes/routes.js']
}
const swaggerSpec=swaggerJsdoc(options);
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerSpec,{ explorer: true }));



app.use('/hello',router);
app.listen(5000,()=>{
    console.log("listening");
});