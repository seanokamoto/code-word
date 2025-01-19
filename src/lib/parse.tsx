import fs from 'fs';

const file = fs.readFileSync('words.jsonc', 'utf-8');
const wordData = JSON.parse(file);

export default function getWord(id: string) {
    const word: Word = wordData['words'][id];
    return word;
}

console.log(getWord('1192025'));