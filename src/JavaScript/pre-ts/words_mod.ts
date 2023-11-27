export function random_int(min : number, max : number) : number {
    return Math.floor((Math.random() * max) + min);
}
export function random_word(alphabet : string, min_letters : number, max_letters : number) : string {
    let letters = random_int(min_letters,max_letters-1);
    let word = '';
    for (let i = 0; i < letters; i++) 
        word += alphabet[random_int(0,alphabet.length)];
    return word;
}
export function random_words(alphabet : string, num_words : number,  min_letters : number, max_letters : number) : string[] {
    let words : string[] = [];
    for (let i = 0; i < num_words; i++) 
        words.push( random_word(alphabet, min_letters, max_letters));
    return words;
}
export function nth_word(alphabet : string ,n : number) : string {
    let nth_word = '';
    const string_of_number = n.toString(alphabet.length);
    for (let i = 0 ; i < string_of_number.length; i++) {
        nth_word += alphabet[parseInt(string_of_number[i],alphabet.length )]

    }
    return nth_word;
}
export function first_n_words(a,n) : string[] {
    let words : string[] = [];
    for (let i = 0 ; i < n ; words.push(nth_word(a, i++)));
    return words;
}
export function no_repeats(words : string[] ) : boolean {
    for (let i = 0; i < words.length; i++) 
        for (let j = 0; j < words.length; j++)
            if (i != j && words[i]== words[j])
                return false;
    return true;
}
export function random_unique_words(alphabet : string, num_words : number, min_letters : number, max_letters : number) : string[] {
    let words  : string[] = [];
    for (let i = 0; i < 10000; i++) {
        words = random_words(alphabet, num_words,  min_letters, max_letters);
        if (no_repeats(words)) return words;
    }
    throw new Error('could not create random unique words')
}
