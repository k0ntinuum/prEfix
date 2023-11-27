import * as keys_mod from './keys_mod';
import * as encode_mod from './encode_mod';
import * as print_mod from './print_mod';
import * as words_mod from './words_mod';

export function live_demo() {
    function update_display() {
        print_mod.cursor_to(0,0);
        print_encodings(key,words);
    }
    function randomize_key() {
        key = keys_mod.random_key(a,4,4,5);
    }
    function react_to(user_input : string) {
        switch (user_input) {
            case 'q' :
                process.stdin.setRawMode(false).setEncoding('utf8').resume();
                print_mod.show_cursor();
                process.exit(0);break;
            case 'w' :
                words = words_mod.random_words(a, num_words, 1,20);
                update_display();
                break;
            case 'n' :
                words = words_mod.first_n_words(a,num_words);
                update_display();
                break;
            case 'k' :
                randomize_key();
                update_display();
                break;
        }
    }
    let num_words = 40; 
    
    let a = 'O|';
    let key  : key;
    randomize_key();
    let words : string[] = words_mod.first_n_words(a,num_words);
    print_mod.hide_cursor();
    print_mod.cls();
    update_display();
    process.stdin.setRawMode(true).setEncoding('utf8').resume().on('data',user_input=>react_to(user_input));
}


export function print_encodings(key : key ,words : string[]) {
    let h : history = [];
    let e : string = '';
    let d : string = ''; 
    let hue = 100;
    for (let i = 0 ; i < words.length; i++) {
        print_mod.set_rgb(hue,hue,hue);
        print_mod.print(`  f   `);
        print_mod.set_rgb(255,0,0);
        print_mod.print(`${words[i].padEnd(25)} `);
        [e , h ]  = encode_mod.encode(key,words[i]);
        print_mod.set_rgb(255,255,0);
        print_mod.print(`${e.padEnd(80)}\n`);
    }
}