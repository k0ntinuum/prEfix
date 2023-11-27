import * as tg from './tg.js';
import * as key from './key.js';
import * as word from './word.js';

export function encode_next(k,m,p) {
    for (let i = 0; i < k[m].length ; i++) {
        const f = k[m][i][0];
        if (p.startsWith(f)) 
            return [k[m][i][1], p.slice(f.length), k[m][i][2], f];
    }
    throw new Error('could not encode');
}
export function encode(k,p) {
    let m = 0;let c = '';let r;let f;
    let p_new = p;let hue = 155;
    let start_row = 0;
    let start_col = 0;
    let col_space_sum = 0;
    let this_col_space = 0;
    let count = 0;
    tg.hide_cursor();
    tg.cursor_to(start_row, start_col);
   
    tg.cls();
    //tg.print(`x = ${p.padEnd(25)}`);
    while (! p == '') {
        r = encode_next(k,m,p);
        c += r[0];
        p = r[1];
        f = r[3];
        this_col_space = Math.max(m.toString().length, r[0].length, f.length)+2;
        tg.set_rgb(hue,hue,hue);
        tg.cursor_to(start_row+2, start_col+col_space_sum);
        tg.print(`${m.toString().padEnd(this_col_space)}`);
        tg.set_rgb(255,0,0);
        tg.cursor_to(start_row+3, start_col+col_space_sum);
        tg.print(`${f.padEnd(this_col_space)}`);
        tg.set_rgb(255,255,0);
        tg.cursor_to(start_row+4, start_col+col_space_sum);
        tg.print(`${r[0].padEnd(this_col_space)}`);
        m = r[2];
        count += 1;
        col_space_sum += this_col_space;
    }
    tg.set_rgb(255,255,255);
    tg.cursor_to(start_row+6, start_col);
    tg.print(`f ${p_new}  = ${c.padEnd(25)}\n`);
    
    return c;
}

export function demo() { 
    tg.hide_cursor();
    let key_row = 10;let key_col = 0;
    let a = 'O|@';
    let k = key.random_key(4,7,a,5);
    let w = word.random_word(a,6,9);
    function react_to(i) {
        switch (i) {
            case 'q' :
                tg.show_cursor();
                process.stdin.setRawMode(false).setEncoding('utf8').resume();
                process.exit(0);break;
            case 'w' :
                w = word.random_word(a,6,9);
                //tg.cursor_to(0,0);
                encode(k,w);
                tg.cursor_to(key_row,key_col);
                key.print_key(k);
                break;
            case 'n' :
                w = word.random_word(a,6,9);
                //tg.cursor_to(0,0);
                encode(k,w);
                break;
            
            case 'k' :
                k = key.random_key(4,7,a,5);
                //tg.cursor_to(0,0);
                encode(k,w);
                tg.cursor_to(key_row,key_col);
                key.print_key(k);
                break;
        }
    }
    tg.cls();
    //tg.cursor_to(0,0);
    encode(k,w);
    tg.cursor_to(key_row,key_col);
    key.print_key(k);
    process.stdin.setRawMode(true).setEncoding('utf8').resume().on('data',i=>react_to(i));
}

export function encode_p_c_history(k,p) {
    let history =[];
    let m = 0;let c = '';let r;let f;
    while (! p == '') {
        r = encode_next(k,m,p);
        c += r[0];
        p = r[1];
        f = r[3];
        history.push([m.toString(),f,r[0]]);
        m = r[2];
       
    }
    return [c, history];
}

export function print_history(p,c,h) {
    let col_space = [];
    for (let i = 0 ; i < h.length; i++) {
        col_space.push(Math.max(h[i][0].length,h[i][1].length,h[i][2].length)+1);
    }
    for (let i = 0 ; i < h.length; i++) tg.print(`${h[i][0].toString().padEnd(col_space[i])}`);
    tg.print('\n');
    for (let i = 0 ; i < h.length; i++) tg.print(`${h[i][1].toString().padEnd(col_space[i])}`);
    tg.print('\n');
    for (let i = 0 ; i < h.length; i++) tg.print(`${h[i][2].toString().padEnd(col_space[i])}`);
    tg.print('\n');
    tg.print('\n');
    tg.print(`f ${p}  = ${c}\n`);
}
