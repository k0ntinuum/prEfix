export function decode_next(k,m,c) {
    for (let i = 0; i < k[m].length ; i++) {
        if (c.startsWith(p)) 
            return [k[m][i][0], k[m][i][1], k[m][i][2]];
    }
    throw new Error('could not decode');
}
export function encode_next(k,m,p) {
    let finds, puts, goes;
    for (let i = 0; i < k[m].length ; i++) {
        if (p.startsWith(f)) 
        return [k[m][i][0], k[m][i][1], k[m][i][2]];
    }
    throw new Error('could not encode');
}

export function decode(k,c) {
    let history =[]
    let m = 0;let p = '';let r;
    while (! c == '') {
        r = decode_next(k,m,c);
        p += r[0];
        c = r[1];
        history.push([m.toString(),p,r[0]]);
        m = r[2];
    }
    return p;
}

export function encode(k,p) {
    let history =[];
    let mode = 0;let c = '';let r;let f;
    while (! p == '') {
        [finds, puts, goes]  = encode_next(k,m,p);
        cipher += puts;
        p = p.slice(finds.length);
        history.push([mode.toString(),finds,puts]);
        mode = goes;
    }
    return [c, history];
}


