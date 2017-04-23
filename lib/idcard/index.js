var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var config = require('../../conf');
var merge_obj = require('../../utils').merge_obj;

// parse the idcard area
var parse_area = function(id, filepath) {
    var area_id = id.substr(0, 6);
    var lines = zlib.gunzipSync(fs.readFileSync(filepath)).toString().split('\n');

    for (var i = 0; i < lines.length; i++) {
        var line_array = lines[i].trim().split(',');
        if (area_id === line_array[0]) {
            return {
                area_id: area_id,
                area_name: line_array[1]
            };
        }
    };

    return {};
};

var get_area = function(id){
    return parse_area(id,config.idcard.datapath);
};

// parse idcard birthday
var get_birthday = function(id) {
    var birthday;
    if (id.length === 18) {
        birthday = id.substr(6, 8);
    } else if (id.length === 15) {
        birthday = '19' + id.substr(6, 6);
    };
    return {birthday: birthday};
};

// parse idcard gender
var get_gender = function(id) {
    var n;
    if (id.length === 18) {
        n = id.substr(16, 1);
    } else if (id.length === 15) {
        n = id.substr(14, 1);
    };
    return { gender: n % 2 ? '男' : '女' };
};

// valid idcard
var is_id_card = function(id) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(id);
};

// parse
var query = function(id) {
    var id = String(id);
    if (!is_id_card(id)) {
        console.error('Error: id card is illegal!');
        return;
    };
    return merge_obj( get_area(id), get_birthday(id), get_gender(id) );
};

module.exports = {
    get_area: get_area,
    get_birthday: get_birthday,
    get_gender: get_gender,
    is_idcard: is_id_card,
    query: query
};
