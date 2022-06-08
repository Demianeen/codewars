"use strict";
function countBits(n) {
    if (n % 1 == 0) {
        let temp = n.toString(2).split("");
        let res = 0;
        temp.map((item) => {
            if (item == '1') {
                res++;
            }
        });
        return res;
    }
    return 0;
}
console.log(countBits(1234.12));
console.log(countBits(1234));
console.log(countBits(-1234));
