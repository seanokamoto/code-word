import fs from 'fs';
import json5 from 'json5';

const file = fs.readFileSync('words.jsonc', 'utf-8');
const wordData = json5.parse(file);

export default function getWord(id: string) {
  const word: Word = wordData['words'][id];
  return word;
}

console.log(getWord('1192025'));