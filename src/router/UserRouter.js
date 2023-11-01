import express from 'express'
import { createNewUser, createUser, deleteUser, getAllUser, getSingleUser, getUser, updateUser } from '../controller/UserController.js';

const UserRouter = express.Router();

UserRouter.get('/user', getUser)

UserRouter.get('/all-user', getAllUser)

UserRouter.get('/singleuser/:Id', getSingleUser)

UserRouter.post('/user', createUser)

UserRouter.post('/create-user', createNewUser)

UserRouter.put('/singleuser/:Id', updateUser)

UserRouter.delete('/singleuser/:Id', deleteUser)

export default UserRouter;