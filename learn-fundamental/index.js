import {odd, even} from './var.js'
import checkOddOrEven from './fuct.js';

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    }
    return even;
}

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('Hello'));