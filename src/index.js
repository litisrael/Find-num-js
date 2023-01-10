import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { listUnsorted, arrUnsorted, arrSorted, searchLog,arrIncludesClassic } from './utilites.js'
const rl = readline.createInterface({ input, output });
 console.log(arrSorted)
const ask = async()=>{
const answerNumber = await rl.question("Tell me what number you're looking for, I'll check if I have it\n");
const answerSearch = await rl.question('How do you prefer that I search?\n in array messy respons 1\n in array sorted, respons 2\n' );

if (answerSearch == 1 ){console.log(arrIncludesClassic(arrUnsorted,parseInt(answerNumber)))}
if (answerSearch == 2 ){console.log(searchLog(arrSorted,parseInt(answerNumber)))}
if (answerSearch == 3 ){console.log(listUnsorted.find(parseInt(answerNumber)))}
rl.close();
}
ask()
