export class Kata {
  static getCount(str: string): number  {
    let res = str.match(/[aeiou]/gm);
    if (Kata.isRegExpMatchArray(res)) {
      return res.length;
    }
    return -1;
  }
  static isRegExpMatchArray(RegExpMatchArray: RegExpMatchArray | null): RegExpMatchArray is RegExpMatchArray  {
    return RegExpMatchArray != null ? true : false;
  }
}

console.log(Kata.getCount("adhjbajkdbasdjka") + " --> 4");