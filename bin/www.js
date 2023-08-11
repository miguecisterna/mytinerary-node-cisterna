// IMPORTS 
import app from '../app.js';         //---> Configuración del servidor.
import debug from 'debug';        //---> Modulo de debugeo.
import http from 'http';          //---> Modulo para crear servidores HTTP
import { connect } from 'mongoose';

// PORT
//process.end guarda las configuraciones de las variables de entorno
//(variables muy delicadas, que son necesarias de proteger, se configuran con un modulo que se llama "dotenv")
let port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// START SERVING

let server = http.createServer(app);    //---> Creo un servidor normalizado con http.

let ready = ()=> {
  console.log('Serving on port ' + port + ' ...');
  connect('mongodb+srv://miguecisterna:dalelobo@cluster0.m9z6ptz.mongodb.net/')
  .then(() => console.log('db conected'))
  .catch(err=>console.log(err));
}

server.listen(port, ready);                    //---> Escucho el puerto para que empiece a funcionar (a levantarse).

server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
