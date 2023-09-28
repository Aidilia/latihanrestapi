'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API berjalan", res)
}

//menampilkan semua data mhs
exports.tampildatabasemahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if (error){
            connection.log(err);
        }else{
            response.ok(rows, res);
        }
    });
};