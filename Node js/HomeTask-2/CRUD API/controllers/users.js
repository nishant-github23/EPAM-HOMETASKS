
import {v4 as uuidv4} from 'uuid';

let users =[];

export const getUsers = (req,res)=>{
    res.send(users);
}

export const createUsers = (req,res)=>{
    const user = req.body;
    const userId = uuidv4(); 

    const userWithId = {...user,id:userId}

    users.push(userWithId);
    res.send(`user with ${user.loginid} has been added`);
}

export const founduser = (req,res)=>{
    const {id} = req.params;
   const founduser= user.find((user)=>
   user.id === id);
    res.send(founduser);
}


export const deleteUser =  (req,res)=>{
    const {id} = req.params;
    users = users.filter((user)=> user.id !==id);
    res.send(`user with ${id} got deleted`);
}


export const updateUser = (req,res)=>{
    const {id} = req.params;
    const{login ,password,age}= req.body;

    const userToBeUpdated = users.find((user)=> user.id===id);
    if(login) user.login = login;
    if(password) user.password = password;
    if(age) user.age =age;

    res.send(`user with ${id} has been updated `);
}
