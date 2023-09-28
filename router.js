'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampildatabasemahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarID);

    app.route('/mahasiswa/tambah')
        .post(jsonku.tambahdatamahasiswa);

    app.route('/mahasiswa/update')
        .put(jsonku.updatedatamahasiswa);

    app.route('/mahasiswa/delete')
        .delete(jsonku.deletedatamasahsiswa);
}