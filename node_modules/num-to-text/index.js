const ONES =  [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen"    
];
    
const TENS = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
];
    
const PLACES = [ 
    "",
    "",
    "Hundred"
];

const PLACES_INDIAN = [ 
    "",
    "",
    "",
    "Thousand",
    "",
    "Lakh",
    "",
    "Crore",
    "",
    "Arab",
    "",
    "Kharab"
];

const PLACES_INTERNATIONAL = [ 
    "",
    "",
    "",
    "Thousand",
    "",
    "",
    "Million",
    "",
    "",
    "Billion",
    "",
    "",
    "Trillion",
    "",
    "",
    "Quadrillion",
    "",
    "",
    "Quintillion",
    "",
    "",
    "Sextillion",
    "",
    "",
    "Septillion"
];

function getTens(value) {
    value = parseInt(value);
    if(value > 99 || value < 1) return "";
    if(value < 20) {
        return ONES[value];
    }
    return (TENS[parseInt(value / 10)] + " " + ONES[parseInt(value % 10)]).trim();
}
    
function getHundred(value) {
    value = parseInt(value);
    if(value < 100) return getTens(value);
    return (ONES[parseInt(value / 100)] + " " + PLACES[2] + " " + getTens(value % 100)).trim();
}

function getPositiveIndianNumber(value) {
    value = parseInt(value);
    let result = getHundred(value % 1000);
    value = parseInt(value / 1000);
    if(value < 1) return result;
    let place = 3;
    while(value > 0) {
        result = (getTens(value % 100) + " " + PLACES_INDIAN[place] + " " + result).trim();
        value = parseInt(value / 100);
        place += 2;
    }
    return result;
}

function getPositiveInternationalNumber(value) {
    value = parseInt(value);
    let result = "";
    if(value < 1) return result;
    let place = 0;
    while(value > 0) {
        result = (getHundred(value % 1000) + " " + PLACES_INTERNATIONAL[place] + " " + result).trim();
        value = parseInt(value / 1000);
        place += 3;
    }
    return result;
}

function toIndian(value) {
    if(Math.abs(value) > 9999999999999) throw new Error("Out of range number, currently it only supports indian numbering system from -9999999999999 to +9999999999999");
    if(value == 0) return "Zero";
    return (value < 0)? "Minus " + getPositiveIndianNumber(value * -1): getPositiveIndianNumber(value);
}

function toInternational(value) {    
    if(Math.abs(value) > 999999999999999999999999999) throw new Error("Out of range number, currently it only supports indian numbering system from -999999999999999999999999999 to +9999999999999999999999999999999999999999");
    if(value == 0) return "Zero";
    return (value < 0)? "Minus " + getPositiveInternationalNumber(value * -1): getPositiveInternationalNumber(value);
}

/**
 * Converts any number to string equivalent representation
 * @param value numeric value or number
 * @param format is a numbering format. It can be 'int' (International) or 'in' (Indian).
 * @returns string equivalent currency
 */
module.exports = function(value, format = 'int') {
    if(value) {
        if(value === "") throw new Error("Invalid number");
        value = parseInt(value);
        switch(format) {
            case 'int': return toInternational(value);
            case 'in': return toIndian(value);
            default: throw new Error("Invalid format");
        }
    }
    throw new Error("Invalid number");
}
