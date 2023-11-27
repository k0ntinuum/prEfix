
import * as word from './word.js';

export function is_prefix_code(c) {
    for (let i = 0; i < c.length; i++)
        for (let j = 0; j < c.length; j++)
            if (i != j && c[i].startsWith(c[j]))
                return false;
    return true;
}
export function random_puts(a,n,L) {
    let p = [];let w;let count = 0;let C = 10000;
    while (p.length < n) {
        w = word.random_word(a, 1, word.random_int(1, L));
        p.push(w);
        if (!is_prefix_code(p)) p.pop(w);
        count += 1;
        if (count % C == 0) p = [];
        else if (count > 10*C) throw new Error('failed prefix code');
    }
    return p;
}





