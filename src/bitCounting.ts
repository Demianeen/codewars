function countBits(n: number): number {
    if (n%1 == 0) {
        let temp = n.toString(2).split("");
        let res: number = 0;
        temp.map((item: string): void => {
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