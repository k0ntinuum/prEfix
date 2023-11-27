import * as words_mod from './words_mod';

export function is_prefix_code(words : string[] ) : boolean {
    for (let i = 0; i < words.length; i++)
        for (let j = 0; j < words.length; j++)
            if (i != j && words[i].startsWith(words[j]))
                return false;
    return true;
}

export function random_puts(alphabet : string ,num_words : number, max_letters : number ) : string[] {
    let puts : string[] = [];
    let word : string = '';
    let counter = 0;let interval = 10000;let max_intervals = 10;
    while (puts.length < num_words) {
        word = words_mod.random_word(alphabet, 1, words_mod.random_int(1, max_letters));
        puts.push(word);
        if (!is_prefix_code(puts)) puts.pop(word);
        counter += 1;
        if (counter % interval == 0) puts = [];
        else if (counter > max_intervals*interval) throw new Error('failed to create prefix code');
    }
    return puts;
}