'use strict'

exports.ok = function(values, res){
    var data ={
        'satus': 200,
        'values': values
    };

    res.json(data);
    res.end();
}