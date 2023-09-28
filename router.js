'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampildatabasemahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarID);

    app.route('/tambah')
        .post(jsonku.tambahdatamahasiswa);
}