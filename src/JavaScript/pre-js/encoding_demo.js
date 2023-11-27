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


export function print_encodings(k,w) {
    
    let e; let d; let hue = 100;
    for (let i = 0 ; i < w.length; i++) {
        tg.set_rgb(hue,hue,hue);
        tg.print(`  f   `);
        tg.set_rgb(255,0,0);
        tg.print(`${w[i].padEnd(25)} `);
        e = encode.encode(k,w[i]);
        tg.set_rgb(255,255,0);
        tg.print(`${e.padEnd(60)}\n`);
        // d = decode.decode(k,e);
        // tg.set_rgb(255,255,0);
        // tg.print(`${d.padEnd(20)}\n`);
    }
}


export function encoding_demo() {
    let num_words = 40; 
    tg.hide_cursor();
    let a = 'O|@';
    let k = key.random_key(4,7,a,5);
    let w = word.first_n_words(a,num_words);
    function react_to(i) {
        switch (i) {
            case 'q' :
                process.stdin.setRawMode(false).setEncoding('utf8').resume();
                process.exit(0);break;
            case 'w' :
                w = word.random_words(num_words,a,1,20);
                tg.cursor_to(0,0);
                print_encodings(k,w);
                break;
            case 'n' :
                w = word.first_n_words(a,num_words);
                tg.cursor_to(0,0);
                print_encodings(k,w);
                break;
            
            case 'k' :
                k = key.random_key(4,7,a,5);
                tg.cursor_to(0,0);
                print_encodings(k,w);
                break;
        }
    }
    tg.cls();
    tg.cursor_to(0,0);
    print_encodings(k,w);
    process.stdin.setRawMode(true).setEncoding('utf8').resume().on('data',i=>react_to(i));
}