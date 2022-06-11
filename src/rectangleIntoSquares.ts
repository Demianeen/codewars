export class G964 {
	public static sqInRect(l: number, w: number): number[] | null{
		const res: number[] = [];
		console.log(l, w);
		if (l == w) return null;

		while (l != 0 && w != 0) {
			if (l > w) {
				l -= w;
				res.push(w);
			} else {
				w -= l;
				res.push(l);
			}
		}
		return res;
	}
}

console.log(G964.sqInRect(5, 3) + ' --> [3, 2, 1, 1]');
console.log(G964.sqInRect(3, 5) + ' --> [3, 2, 1, 1]');

// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).
// img/rectangleIntoSquares

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

// When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return None/nil/null/Nothing or return {} with C++, Array() with Scala, [] with Perl, Raku.
