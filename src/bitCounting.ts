function countBits(n: number): number {
	if (n%1 == 0) {
		const temp = n.toString(2).split('');
		let res = 0;
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

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

