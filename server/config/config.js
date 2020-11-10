//////////
//puerto de conexion//
//////////
process.env.PORT = process.env.PORT || 3000;

///////////
//entorno//
///////////
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


///////////
//seed//
///////////
process.env.SEED = process.env.SEED || 'seed-desarrollo';

///////////
//expiracion de token//
///////////
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


////////////
////Base///
///////////
let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;



////////////
////google cliente///
///////////
process.env.CLIENTE_ID = process.env.CLIENT_ID || '723540465543-61ouv3h5h02vpgrt4gp9d5lh5vtr7ip7.apps.googleusercontent.com';