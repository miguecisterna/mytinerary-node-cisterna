// IMPORTS
import 'dotenv/config.js';                          //--------------> Importo UNICAMENTE la configuracion de las variables de entorno.
import __dirname from './utils.js';                 //--------------> Importo la configuracion de la ubicación del servidor (antes,con commonjs, venía pre-configurada).
// var createError = require('http-errors');   
import createError from 'http-errors';              //-------------->  Crea errores.

// var express = require('express');         
import express from 'express';                      //-------------->  Provee metodos y propiedades para levantar servidores.

// var path = require('path');
import path from 'path';                            //-------------->  Para conocer la ubicacion de nuestro servidor.

// var cookieParser = require('cookie-parser');     //-------------->  Modulo para manejo de cookes (de momento no nos interesa).

// var logger = require('morgan');
import logger from 'morgan'                         //-------------->  Para registrar cada una de las peticiones.

// var indexRouter = require('./routes/index');     //-------------->  Solo vamos a configurar las rutas de back primcipal
import indexRouter from './routes/index.js'         //-------------->  Este enrutador va allamar a todos los otros recursos (cities, itineraries, etc).



let app = express();                                //-------------->  Ejecutando el modulo de express CREO UNA APP DE BACKEND (servidor).



// VIEW ENGINE SETUP
// "set" es el metodo necesario para setear (configurar) algo (en este caso el motor de plantillas de vistas de EJS).
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// MIDDLEWARES (funciones)
// "use" es el metodo necesario para obligar a mi aplicacion a que use la funcion CADA VEZ que se realiza una SOLICITUD
app.use(logger('dev'));                                        //----> Obligo al servidor a registrar una petición con el modulo logger.
app.use(express.json());                                       //----> Obligo al servidor a manipular/leer json.
app.use(express.urlencoded({ extended: false }));              //----> Obligo al servidor a leer params/queries.
// app.use(cookieParser());                                    //----> ||Comentado porque no estamos usando el modulo.||
app.use(express.static(path.join(__dirname, 'public')));       //----> Onligo al servidor a acceder a los archivos estáticos de la carpeta public


//ROUTER
app.use('/api', indexRouter);                                  //----> Obligo al servidor a que use las rutas del enrutador principal con "/api"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
