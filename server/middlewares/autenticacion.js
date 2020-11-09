const { json } = require("body-parser");
const { JsonWebTokenError } = require("jsonwebtoken");

const jwt = require('jsonwebtoken');

/////////////////
//Verica token
////////////////

let verificaToken = (req, res, next) => {
    //get headers
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token invalido, revisar'
                }
            });
        };

        req.usuario = decoded.usuario;
        next();
    });

};


/////////////////
//Verica role admin
////////////////

let verificaAdmin_role = (req, res, next) => {

    let usuario = req.usuario;
    let role = usuario.role;
    console.log(role);

    if (role !== 'ADMIN_ROLE') {
        return res.json({
            ok: false,
            err: {
                message: 'Ud no es usuario administrador'
            }
        });
    } else {
        next();
    }

};



module.exports = {
    verificaToken,
    verificaAdmin_role
}