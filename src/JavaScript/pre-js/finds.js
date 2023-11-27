import * as word from './word.js';

export function no_repeats(w) {
    for (let i = 0; i < w.length; i++) 
        for (let j = 0; j < w.length; j++)
            if (i != j && w[i]== w[j])
                return false;
    return true;
}

export function random_unique_words(n, a, m, M) {
    let w = [];
    for (let i = 0; i < 10000; i++) {
        w = word.random_words(n, a, m, M);
        if (no_repeats(w)) return w;
    }
    throw new Error('could not create finds')
}

export function random_finds(n,a,M) {
    let f = random_unique_words(n - a.length,a,2,M);
    for (let i = 0; i < a.length;  f.push(a[i++]) );
    return f;
}