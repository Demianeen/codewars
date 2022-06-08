function twoOldestAges(ages: number[]): [number, number] {
    let max = -10000;
    let secondMax = -10002;
    ages.map((age) => {
        if (age > secondMax) {
            if (age > max) {
                secondMax = max;
                max = age;
                return;
            }
            secondMax = age;
        }
    })
    return [secondMax, max];
}

console.log(twoOldestAges([1, 2, 10, 8]) + " --> [8, 10]");
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]) + " --> [45, 87]");
console.log(twoOldestAges([1, 3, 10, 0]) + " --> [3, 10]");