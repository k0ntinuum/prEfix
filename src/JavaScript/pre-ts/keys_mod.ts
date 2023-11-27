import * as modes_mod from './modes_mod';
import * as print_mod from './print_mod';


export function random_key(alphabet : string, num_modes : number , num_words : number , max_letters : number) : mode[] {
    let key : mode[] = [];
    for (let i = 0; i < num_modes; i++) {
        key.push(modes_mod.random_mode(alphabet, num_modes, num_words,max_letters));
    }
    return key;
}

export function print_key(key : mode[]) : void  {
    let col_space = 10;
    for (let i = 0 ; i < key.length ;  i++) {
        print_mod.print(`\n\n${i}\n`);
        for (let j = 0 ; j < key[0].length ;  j++) {
            print_mod.print(`${key[i][j][0].toString().padEnd(col_space)} `);
            print_mod.print(`${key[i][j][1].toString().padEnd(col_space)} `);
            print_mod.print(`${key[i][j][2].toString().padEnd(col_space)}\n`);
        }
        print_mod.print(`\n`);
    }
}