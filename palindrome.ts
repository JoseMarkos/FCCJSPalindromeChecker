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

export default function (str: string): boolean {
  let formated = format(str);

  if (formated.length === 3)
    return formated[0] === formated[2];

  if (formated[0] !== formated[formated.length - 1])
    return false
  
  let filtered      = split(formated);
  let reverseIndex  = filtered[0].length - 1;

  for (let index = 0; index < filtered[0].length; index++) {
    if (filtered[0][index] !== filtered[1][reverseIndex]) {
      return false;
    }
    
    reverseIndex--;
  }

  return true;
}