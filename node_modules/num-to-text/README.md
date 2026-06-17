### Description
Converts any number to string equivalent representation. It support International and Indian numbering system. The Indian numbering system is used in the Indian subcontinent (Bangladesh, India, Nepal, Maldives, Pakistan and Sri Lanka) and in Burma. 

**Number Range**
 * International (default): -999999999999999999999999999 to +999999999999999999999999999 
 * Indian: -9999999999999 to +9999999999999

### Installation
```sh
$ npm install --save num-to-text
```

### Import Statement
```js
import * as numToText from 'num-to-text';
```

### Usage
```js
let number = 9231244534458;

console.log("Number: " + 9231244534458)

try {
    console.log("Default Format (International): " + numToText(number));
} catch(e) {
    console.error(e.message);
}

try {
    console.log("International Format: " + numToText(number, 'int'));
} catch(e) {
    console.error(e.message);
}

try {
    console.log("Indian Format: " + numToText(number, 'in'));
} catch(e) {
    console.error(e.message);
}
```

### Output
```
Number: 9231244534458
Default Format (International): Nine Trillion Two Hundred Thirty One Billion Two Hundred Forty Four Million Five Hundred Thirty Four Thousand Four Hundred Fifty Eight
International Format: Nine Trillion Two Hundred Thirty One Billion Two Hundred Forty Four Million Five Hundred Thirty Four Thousand Four Hundred Fifty Eight
Indian Format: Ninety Two Kharab Thirty One Arab Twenty Four Crore Forty Five Lakh Thirty Four Thousand Four Hundred Fifty Eight
```
