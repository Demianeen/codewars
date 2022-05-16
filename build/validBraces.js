"use strict";
function validBraces(braces) {
    const regex = /\(\)|\[\]|\{\}/;
    // let temp = '';
    // while (regex.test(braces)) {
    //     temp += braces.match(regex);
    // }
    while (regex.test(braces)) {
        console.log(braces);
        braces = braces.replace(regex, '');
    }
    return braces.length == 0;
}
console.log(validBraces('(){}[]') + ' => True');
console.log(validBraces('([{}])') + ' => True');
console.log(validBraces('(}') + ' => False');
console.log(validBraces('[(])') + ' => False');
console.log(validBraces('[({})](]') + ' => False');
