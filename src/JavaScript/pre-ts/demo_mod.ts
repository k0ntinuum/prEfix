import * as keys_mod from './keys_mod';
import * as encode_mod from './encode_mod';
import * as print_mod from './print_mod';
import * as words_mod from './words_mod';

export function demo() {
    const a = 'O|@*#';
    const k = keys_mod.random_key(a,5,8,3);
    //print_mod.cls();
    keys_mod.print_key(k);
    for (let i  = 0; i < 10 ; i++) {
    const p = words_mod.random_word(a,3,13 );
    const [c, h] = encode_mod.encode(k, p);
    print_mod.print_history('encode',p, c, h);
    const [d , H ] = encode_mod.decode(k, c);
    print_mod.print_history('decode', c, d, H);
    }
}

