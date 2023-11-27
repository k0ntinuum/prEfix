import * as tg from './tg.js';

export function encode_next(k,m,p) { 
    for (let i = 0; i < k[m].length ; i++) {
        if (p.startsWith(k[m][i][0])) 
        return [k[m][i][0], k[m][i][1], k[m][i][2]];
    }
    throw new Error('could not encode');
}

export function encode(k,p) {
    let history =[];
    let finds, puts, goes;
    let m = 0;let c = '';
    while (! p == '') {
        [finds, puts, goes]  = encode_next(k,m,p);
        c += puts;
        p = p.slice(finds.length);
        history.push([m.toString(),finds,puts]);
        m = goes;
    }
    history.f = 'f';
    return [c, history];
}
export function decode_next(k,m,c) {
    for (let i = 0; i < k[m].length ; i++) {
        if (c.startsWith(k[m][i][1])) 
            return [k[m][i][0], k[m][i][1], k[m][i][2]];
    }
    throw new Error('could not decode');
}

export function decode(k,c) {
    let history =[];
    let finds, puts, goes;
    let m = 0;let p = '';
    while (! c == '') {
        [finds, puts, goes]  = decode_next(k,m,c);
        p += finds;

        c = c.slice(puts.length);
        history.push([m.toString(),puts,finds]);
        m = goes;
    }
    history.f = 'g';
    return [p, history];
}

export function print_history(p,c,h) {
    let col_space = [];
    for (let i = 0 ; i < h.length; i++) {
        col_space.push(Math.max(h[i][0].length,h[i][1].length,h[i][2].length)+3);
    }
    for (let i = 0 ; i < h.length; i++) tg.print(`${h[i][0].toString().padEnd(col_space[i])}`);
    tg.print('\n');
    for (let i = 0 ; i < h.length; i++) tg.print(`${h[i][1].toString().padEnd(col_space[i])}`);
    tg.print('\n');
    for (let i = 0 ; i < h.length; i++) tg.print(`${h[i][2].toString().padEnd(col_space[i])}`);
    tg.print('\n');
    tg.print('\n');
    tg.print(`${h.f} ${p}  = ${c}\n`);
}