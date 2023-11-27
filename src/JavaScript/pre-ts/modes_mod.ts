import * as finds_mod from './finds_mod';
import * as puts_mod from './puts_mod';
import * as goes_mod from './goes_mod';

type response  = [string, string, number];
type mode = response[];

export function random_mode(alphabet : string, num_modes : number , num_words : number , max_letters : number) : mode {
    let new_mode : mode = [];
    let finds = finds_mod.random_finds(alphabet, num_words, max_letters );
    let puts = puts_mod.random_puts(alphabet,num_words,max_letters);
    let goes = goes_mod.random_goes(num_modes);
    for (let i = 0 ; i < num_words ;  i++) 
        new_mode.push([finds[i], puts[i], goes[i%num_modes]]); 
    return new_mode;
}