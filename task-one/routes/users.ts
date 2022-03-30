import {getOneUser, getAllUsers, postUser, updateUserData, deleteUser} from './controller';
const express = require('express');
const router = express.Router();

import { postValidator } from '../Validation/inputValidation';
// var database = require('../database.json');

/* GET users listing. */


router.get('/:id', getOneUser);
router.get('/', getAllUsers);
router.post('/', postUser);
router.put('/:id', updateUserData);
router.delete('/:id', deleteUser);



export default router;