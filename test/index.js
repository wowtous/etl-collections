var etl = require('..');

console.log(etl.idcard.query('371501199112025093'));
console.log(etl.idcard.get_area('371501199112025093'));
console.log(etl.idcard.get_birthday('371501199112025093'));
console.log(etl.idcard.get_gender('371501199112025093'));
console.log(etl.idcard.is_idcard('371501199112025093'));

console.log(etl.mobile.query('15101332143'));
