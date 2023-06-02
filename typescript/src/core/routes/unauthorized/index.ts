import {Express} from 'express';
import signUpRoute from './signup'
const unauthorized=(app:Express)=>{
    app.use('/signup',signUpRoute);
    return app;

}
export default unauthorized;