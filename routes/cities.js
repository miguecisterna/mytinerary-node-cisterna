import express from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';

let router = express.Router();


//CREATE
router.post('/', create);

//READ
router.get('/', read);
router.get('/:id', readOne);

//UPDATE
router.put('/:u_id', update);

//DESTROY
router.delete('/:d_id', destroy);

export default router;