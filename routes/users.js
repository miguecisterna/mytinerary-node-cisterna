import express from 'express';
import create from '../controllers/users/create.js';

let router = express.Router();


//router.post('./',  funcion)
//metodo http que: para crear es POST, para actualizar es PUT/PATCH y para eliminar es DELETE
// -> cada vez que realizo una peticion POST, se creará un recurso.
// -> cada vez que realizo una peticion GET, se leerán recursos.
// -> cada vez que realizo una peticion PUT/PATCH, se actualizará un recurso.
// -> cada vez que realizo una peticion DELETE, se eliminará un recurso.

//CREATE
router.post('/', create);

//READ
router.get('/', read);

//UPDATE
router.put('/', update);

//DESTROY
router.delete('/', destroy);


export default router;
