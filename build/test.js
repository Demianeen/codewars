"use strict";
let res = 0;
for (let i = 0; i < 32; i++) {
    res += 2 ^ i;
}
console.log(res);
