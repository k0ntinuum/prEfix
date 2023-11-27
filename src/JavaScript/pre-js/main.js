import * as word from './word.js';
import * as puts from './puts.js';
import * as goes from './goes.js';
import * as finds from './finds.js';
import * as mode from './mode.js';
import * as key from './key.js';
import * as tg from './tg.js';
import * as encode from './code.js';
import * as decode from './decode.js';
import * as key_demo from './key_demo.js';
import * as encoding_demo from './encoding_demo.js';
import * as demo_encode from './demo_encode.js';
import * as code from './code.js';


let p,c,d,h1,h2;
let a = 'O|@';
let k = key.random_key(12,3,a,5);
key.alt_print_key(k);
console.log();
for (let i = 0; i < 10; i++) { 
    p = word.random_word(a,4,17);
    [c,h1] = code.encode(k,p);
    code.print_history(p,c,h1, true);
    console.log();
    console.log();
    console.log();
    console.log();
    [d,h2] = code.decode(k,c);
    code.print_history(c,d,h2, false);
    console.log();
    console.log();
    console.log();
    console.log();

}

// console.log(p);
// console.log(c);
// console.log(d);
