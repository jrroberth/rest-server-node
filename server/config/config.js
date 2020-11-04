//////////
//puerto de conexion//
//////////
process.env.PORT = process.env.PORT || 3000;

///////////
//entorno//
///////////
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


////////////
////Base///
///////////
let urlDB;


if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    urlDB = 'mongodb+srv://rko:FrP8NlfVc3PMbm31@cluster0.odoec.mongodb.net/cafe';
}

// process.env.BASE = 'mongodb://localhost:27017/cafe';
process.env.URLDB = urlDB;