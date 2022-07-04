import express from 'express';
import { deleteUser, updateUser,founduser,createUsers,getUsers } from '../controllers/users.js';


const router = express.Router();

const{addUserValidation}= require('../middleware/users/user.validation')

router.get('/',getUsers);
router.post('/',addUserValidation,createUsers);
router.get('/:id',founduser)
router.delete('/:id' , deleteUser);
router.patch('/:id', updateUser);


export default router;