'use strict';

var response = require('./res');
var connection = require('./koneksi');
const conn = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API berjalan", res)
}

//menampilkan semua data mhs
exports.tampildatabasemahasiswa = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if (error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data berdasarkan ID
exports.tampilberdasarID = function(req,res){
    let id= req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mhs = ?', [id], function(error, rows, fields){
        if (error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menambahkan data mahasiswa
exports.tambahdatamahasiswa = function(req, res){
    var nim_mhs = req.body.nim_mhs;
    var nama_mhs = req.body.nama_mhs;
    var jurusan = req.body.jurusan;
    
    connection.query('INSERT INTO mahasiswa (nim_mhs,nama_mhs,jurusan) VALUES(?,?,?)', 
    [nim_mhs,nama_mhs,jurusan], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil menambahkan data!", res);
        }
    });
};

//mengupdat data mahasiswa
exports.updatedatamahasiswa = function(req, res){
    var id_mhs = req.body.id_mhs;
    var nim_mhs = req.body.nim_mhs;
    var nama_mhs = req.body.nama_mhs;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim_mhs=?, nama_mhs=?, jurusan=? WHERE id_mhs=?', 
    [nim_mhs,nama_mhs,jurusan,id_mhs], 
    function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok("Berhasil Update Data", res);
        }
    });
};

//menghapus data mahasiswa
exports.deletedatamasahsiswa = function(req,res){
    var id_mhs = req.body.id_mhs;
    connection.query('DELETE FROM mahasiswa WHERE id_mhs=?',
    [id_mhs], 
    function(error, rows, fields){
        if (error) {
            console.log(error)
        } else {
            response.ok("Berhasil menghapus data", res);
        }
    });
};

//menampilkan matakuliah group
exports.tampilgroupmatakuliah = function(req, res){
    connection.query('SELECT mahasiswa.id_mhs, mahasiswa.nim_mhs, mahasiswa.nama_mhs, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah=matakuliah.id_matakuliah AND krs.id_mhs=mahasiswa.id_mhs ORDER BY mahasiswa.id_mhs',
        function(error, rows, fields){
            if(error){
                console.log(error)
            }else{
                response.okenested(rows, res);
            }
        }
    )
}