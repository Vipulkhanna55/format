import mongoose from "mongoose";
const MONGO_URI:string='mongodb+srv://admin-sameer:16122000@cluster0.flijlqq.mongodb.net/typescriptAPI';
mongoose.Promise= Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error',(error:Error)=>{console.log(error.message)});
export default mongoose;