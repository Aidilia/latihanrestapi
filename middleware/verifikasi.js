const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(){
    return function(req, rest, next){
        var role = req.body.role;
        
        //cek token diheader
        var tokenWithBearer = req.headers.authorization;
        
        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];
 
            //verifikasi
            jwt.verify(token, config.secret, function(error, decoded){
                if(error){
                    return rest.status(401).send({auth:false, message:'Token tidak terdaftar'});
                }else{
                    if(role == 2){
                        req.auth = decoded;
                        next();
                    }else{
                        return rest.status(401).send({auth:false,message:'Gagal mengautorisasi token anda'});
                    }
                }
            });
        }else{
            return rest.status(401).send({auth:false,message:'Token tidak terdaftar'});
        }
    }
}

module.exports = verifikasi;