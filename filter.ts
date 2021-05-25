export default function (str: string): string {
  const match = str.match(/[a-z0-9]+/gi);
  return match ? match.join('') : str;
}