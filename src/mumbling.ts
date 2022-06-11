export function accum(str: string): string {
	let res = '';
	let charCode = 0;

	for (let i = 0; i < str.length; i++) {
		res += '-'; // we will delete first "-" in the end
		charCode = str.charCodeAt(i);

		if (charCode > 96) charCode -= 32; // replace lowercase with upper(a-->A)

		res += String.fromCharCode(charCode);
		res += String.fromCharCode(charCode + 32).repeat(i);     
	}
	res = res.slice(1);
	return res;
}

console.log(accum('abcd') + ' --> A-Bb-Ccc-Dddd');
console.log(accum('RqaEzty') + ' --> R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
console.log(accum('cwAt') + ' --> C-Ww-Aaa-Tttt');
console.log(accum('ZpglnRxqenU') + ' --> Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.