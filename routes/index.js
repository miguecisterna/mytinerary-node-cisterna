import express from 'express' ;
import userRouter from './users.js';
import cityRouter from './cities.js';
import itineraryRouter from './itineraries.js';
import activitiesRouter from './activities.js';

let router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/users', function(req, res, next) {
//   res.render('index', { title: 'Users' });
// });

// Obligo al enrutador principal a usar las rutas del enrutador del recurso
router.use('/users', userRouter);
router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);
router.use('/activities', activitiesRouter);

export default router;
