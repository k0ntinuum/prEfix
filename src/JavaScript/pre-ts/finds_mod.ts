import * as words_mod from './words_mod';

export function random_finds( alphabet : string , num_words : number, max_letters : number ) : string[] {
    let finds = words_mod.random_unique_words(alphabet, num_words - alphabet.length,2, max_letters);
    for (let i = 0; i < alphabet.length;  finds.push(alphabet[i++]) );
    return finds;
}