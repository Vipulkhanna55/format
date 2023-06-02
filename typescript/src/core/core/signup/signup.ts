import { User, userModel } from "../../model";
const createUser =  (user: Record<string,any>) => {
    const newData:User=new userModel(user);
//   await new userModel(user).save();
};

export default { createUser };
