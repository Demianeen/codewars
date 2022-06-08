"use strict";
function validBraces(braces) {
    const regex = /\(\)|\[\]|\{\}/g;
    while (regex.test(braces)) {
        braces = braces.replace(regex, '');
    }
    return braces.length == 0;
}
console.log(validBraces('(){}[]') + ' => True');
console.log(validBraces('([{}])') + ' => True');
console.log(validBraces('(}') + ' => False');
console.log(validBraces('[(])') + ' => False');
console.log(validBraces('[({})](]') + ' => False');
