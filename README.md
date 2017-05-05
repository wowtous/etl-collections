# etl-collections
[![NPM](https://nodei.co/npm/etl-collections.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/etl-collections/)
<br><br>
A util nodejs project for etl.

## install
```sh
npm install etl-collections --save
```

## usage
The idcard and mobile is generated by random rule.

```js
var etl = require('etl-collections');
```


### mobile utils lib
-----
#### query
-----

+ @param number 号码 `15101332143`
+ @desc 查询国内号码
+ @return {}
    - province 手机号码归属地 省份
    - city     手机号码归属地 城市
    - type     手机号码 运营商
+ @example
```js
etl.mobile.query('15101332143')
=>
{ 'province': '甘肃', city: '兰州', type: '中国移动' }
```


#### getCountry
-----

+ @param number 号码 `+8615101332143`
+ @desc 查询国际号码
+ @return {}
    - code      国家编码
    - number    号码
    - country   国家中文
    - enCountry 国家英文
+ @example
```js
etl.mobile.getCountry('+8615101332143')
=>
{ code: 'CN',
  number: '15101332143',
  country: '中国',
  enCountry: 'China' }
```

#### getInfo
-----

+ @param code 国家代码 `CN`
+ @desc 根据国家代码查询信息
+ @return {}
    - code 国家代码
    - name 国家名称中文
    - enName  国家名称英文
    - number  国家号码编号
+ @example
```js
etl.mobile.getInfo('CN')
=>
{ code: 'CN', name: '中国', enName: 'China', number: '86' }
```


### idcard util lib
-----
#### query
-----

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - areaId    区域ID
    - areaName  区域名称
    - birthday  出生日期
    - gender    性别
+ @example
```js
etl.idcard.query('371501199112025093')
=>
{ areaId: '371501',
  areaName: '山东省聊城市市辖区',
  birthday: '19911202',
  gender: '男' }
```



#### getArea
-----

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - areaId    区域ID
    - areaName  区域名称
+ @example
```js
etl.idcard.getArea('371501199112025093')
=>
{ areaId: '371501',
  areaName: '山东省聊城市市辖区'}
```

#### getBirthday
+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - birthday  出生日期
+ @example
```js
etl.idcard.getBirthday('371501199112025093')
=>
{ birthday: '19911202' }
```

#### getGender
-----

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - gender    性别
+ @example
```js
etl.idcard.getGender('371501199112025093')
=>
{ gender: '男' }
```

#### isIdcard
-----

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return Boolean
+ @example
```js
etl.idcard.isIdcard('371501199112025093')
=>
true
```

### Lunar Calendar util lib
-----
整合农历与公历之间相互转换，含有二十四节气，天干地支纪年纪月纪日，生肖属相，公历节假日及农历传统节假日信息等功能模块。(支持1891-2100年)<br>
[参考](https://github.com/zzyss86/LunarCalendar.git)

#### isLeapYear
-----

+ @param {Number} year 公历年
+ @desc 判断公历年是否是闰年
+ @return {Boolean}
+ @example

```js
etl.lunar.isLeapYear(2017)
=>
false
```

#### lunarToSolar
-----

+ @param {Number} year,month,day 农历年，月(1-13，有闰月)，日
+ @desc 将农历转换为公历
+ @return {}
    - year 公历年
    - month 公历月
    - day 公历日
+ @example

```js
etl.lunar.lunarToSolar(2016,12,23)
=>
{ year: 2017, month: 1, day: 20 }
```

#### solarToLunar
-----

+ @param {Number} year,month,day 公历年，月，日
+ @desc 将公历转换为农历
+ @return {}
+ @example

```js
etl.lunar.solarToLunar(2017,1,20)
=>
{ zodiac: '猴',
  GanZhiYear: '丙申',
  GanZhiMonth: '辛丑',
  GanZhiDay: '丁未',
  worktime: 0,
  term: '大寒',
  lunarYear: 2016,
  lunarMonth: 12,
  lunarDay: 23,
  lunarMonthName: '十二月',
  lunarDayName: '廿三',
  lunarLeapMonth: 0,
  solarFestival: undefined,
  lunarFestival: '小年' }
```

#### calendar
-----

+ @param
    - {Number} year,month 公历年，月
    - {Boolean} fill 是否用上下月数据补齐首尾空缺，首例数据从周日开始
+ @desc 获取指定公历月份的农历数据
+ @return {}
+ @example

```js
etl.lunar.calendar(2017,1,false)
=>
{
  firstDay: 0,
  monthDays: 31,
  monthData:
   [{ year: 2017,
       month: 1,
       day: 1,
       zodiac: '猴',
       GanZhiYear: '丙申',
       GanZhiMonth: '庚子',
       GanZhiDay: '戊子',
       worktime: 0,
       term: undefined,
       lunarYear: 2016,
       lunarMonth: 12,
       lunarDay: 4,
       lunarMonthName: '十二月',
       lunarDayName: '初四',
       lunarLeapMonth: 0,
       solarFestival: '元旦节',
       lunarFestival: undefined
   },...]
}
```

#### solarCalendar
-----

+ @param
    - {Number} year,month 公历年，月
    - {Boolean} fill 是否用上下月数据补齐首尾空缺，首例数据从周日开始
+ @desc 获取指定公历月份的农历数据
+ @return {}
+ @example

```js
etl.lunar.solarCalendar(2017,1,false)
=>
{ firstDay: 0,
  monthDays: 31,
  monthData:
   [ { year: 2017, month: 1, day: 1 },
     { year: 2017, month: 1, day: 2 },
     ...
     { year: 2017, month: 1, day: 31 } ] }
```
