export class Kata {
	static getCount(str: string): number  {
		const res = str.match(/[aeiou]/gm);
		if (Kata.isRegExpMatchArray(res)) {
			return res.length;
		}
		return -1;
	}
	static isRegExpMatchArray(RegExpMatchArray: RegExpMatchArray | null): RegExpMatchArray is RegExpMatchArray  {
		return RegExpMatchArray != null ? true : false;
	}
}

// best solution
export class Kata1 {
	static getCount(str: string) {
		const list = str.match(/[aeiou]/gi);
		return list ? list.length : 0;
	}
}

console.log(Kata.getCount('adhjbajkdbasdjka') + ' --> 4');

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

