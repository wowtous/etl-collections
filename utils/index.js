var fs = require('fs');
var path = require('path');
var zlib = require('zlib');

var utils = {};

utils.save_compress_file = function(source, target) {
    if (fs.existsSync(source)) {
        var data = fs.readFileSync(source);
        fs.writeFileSync(target, zlib.gzipSync(data));
    }else{
        console.log("=> Fail: File not exists ->",source);
    }
}

utils.merge_obj = function(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key]
    }
    return o1;
}

module.exports = utils;
