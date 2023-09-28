'use strict'

exports.ok = function(values, res){
    var data ={
        'satus': 200,
        'values': values
    };

    res.json(data);
    res.end();
}

//responsenuntuk nested matakuliah
exports.okenested = function (values, res){
    
    //lakukan akumulasi
    const hasil = values.reduce((akumulasi, item) =>{
        
        //tentukan key group
        if(akumulasi[item.nama_mhs]){
            //buat ariabel group nama mahasiswa
            const group = akumulasi[item.nama_mhs];
            //cek jika isi array adalah matakuliah
            if(Array.isArray(group.matakuliah)){
                //tambah value ke dalam group mk
                group.matakuliah.push(item.matakuliah);
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah];
            }
        }else{
            akumulasi[item.nama_mhs] = item;
        }
        return akumulasi;
    }, {});

    var data = {
        'status' : 200,
        'values' : hasil
    };

     res.json(data);
     res.end();
}