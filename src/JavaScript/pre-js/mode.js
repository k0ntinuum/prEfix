import * as word from './word.js';
import * as puts from './puts.js';
import * as goes from './goes.js';
import * as finds from './finds.js';

export function random_mode(n,a,w,l) {
    let m = [];
    let f = finds.random_finds(w,a,l );
    let p = puts.random_puts(a,w,l);
    let g = goes.random_goes(n);
    for (let i = 0 ; i < w ;  i++) 
        m.push([f[i], p[i], g[i%n]]); 
    return m;
}