import filterNonAlphaNumerics from "./filter.ts"

export default function (str: string): boolean {
  let formated = format(str);

  if (formated.length === 3)
    return formated[0] === formated[2];

  if (formated[0] !== formated[formated.length - 1])
    return false
  
  let splited = splitIntoTwo(formated);

  return isPalindrome(splited);
}

const format = (str: string): string => filterNonAlphaNumerics(str).toLowerCase();

const splitIntoTwo = (str: string): string[] => {
  let middle: number = (str.length - 1) / 2;
  
  if (str.length % 2 === 0) {
    middle = str.length / 2;
    return [str.slice(0, middle), str.slice(middle)];
  }

  return [str.slice(0, middle), str.slice(middle + 1)];
}

const isPalindrome = (arr: string[]): boolean => {
  let reverseIndex  = arr[0].length - 1;

  for (let index = 0; index < arr[0].length; index++) {
    if (arr[0][index] !== arr[1][reverseIndex]) {
      return false;
    }
    
    reverseIndex--;
  }

  return true;
}
