import { filterNonAlpahNumerics } from "./filter.ts"

const format = (str: string): string => filterNonAlpahNumerics(str).toLowerCase();

const split = (str: string): string[] => {
  let middle: number = 0;
  
  if (str.length % 2 === 0) {
    middle = str.length / 2;
    return [str.slice(0, middle), str.slice(middle)];
  }

  middle = (str.length - 1) / 2;
  return [str.slice(0, middle), str.slice(middle + 1)];
}

function palindrome(str: string): boolean {

  if (str.length === 3)
    return str[0] === str[2];

  if (str[0] !== str[str.length - 1])
    return false
  
  let filtered      = split(format(str));
  let reverseIndex  = filtered[0].length - 1;

  for (let index = 0; index < filtered[0].length; index++) {
    if (filtered[0][index] !== filtered[1][reverseIndex]) {
      return false;
    }
    
    reverseIndex--;
  }

  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("holaaloh"));
console.log(palindrome("pholaPalohp"));
