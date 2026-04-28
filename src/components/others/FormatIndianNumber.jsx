export const FormatIndianNumber = (number) => {
    // Convert number to string
    let strNumber = number?.toString();
    // Check for decimal in the number
    let decimalPart = '';
    if (strNumber.includes('.')) {
      [strNumber, decimalPart] = strNumber.split('.');
      decimalPart = '.' + decimalPart; // prepend '.' to keep the decimal part
    }
    const length = strNumber.length;
    if (length <= 3) {
      return strNumber + decimalPart;
    }
    const lastThreeDigits = strNumber.substring(length - 3);
    const mainPart = strNumber.substring(0, length - 3).replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return `${mainPart},${lastThreeDigits}${decimalPart}`;
  };

  import React from 'react'
  