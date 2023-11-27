export function random_int(m, M) {
    return Math.floor((Math.random() * M) + m);
}
export function random_word(a, m, M) {
    let l = random_int(m,M-1);let w = '';
    for (let i = 0; i < l; i++) 
        w += a[random_int(0,a.length)];
    return w;
}
export function random_words(n, a, m, M) {
    let w = [];
    for (let i = 0; i < n; i++) 
        w.push( random_word(a, m, M));
    return w;
}
export function nth_word(a,n) {
    let y = '';
    const s = n.toString(a.length);
    for (let i = 0 ; i < s.length; i++) {
        y += a[parseInt(s[i],a.length )]

    }
    return y
}

export function first_n_words(a,n) {
    let w = [];
    for (let i = 0 ; i < n ; w.push(nth_word(a, i++)));
    return w;
}



