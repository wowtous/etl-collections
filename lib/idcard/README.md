### idcard util lib

#### query

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - areaId    区域ID
    - areaName  区域名称
    - birthday  出生日期
    - gender    性别
+ @example
```js
{ areaId: '371501',
  areaName: '山东省聊城市市辖区',
  birthday: '19911202',
  gender: '男' }
```



#### getArea

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - areaId    区域ID
    - areaName  区域名称
+ @example
```js
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
{ birthday: '19911202' }
```

#### getGender

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return {}
    - gender    性别
+ @example
```js
{ gender: '男' }
```

#### isIdcard

+ @param id 号码 `371501199112025093`
+ @desc 解析中国身份证号码
+ @return Boolean
+ @example
```js
true
```
