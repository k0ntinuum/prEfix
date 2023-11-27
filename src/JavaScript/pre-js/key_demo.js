import * as key from './key.js';
import * as tg from './tg.js';



export function key_demo() {
    let a = 'O|@';
    let k = key.random_key(4,7,a,5);
    function react_to(i) {
        switch (i) {
            case 'q' :
                process.stdin.setRawMode(false).setEncoding('utf8').resume();
                process.exit(0);break;
            case 'k' :
                k = key.random_key(4,7,a,5);
                tg.cursor_to(0,0);
                key.print_key(k);
                break;
        }
    }
    tg.cls();
    tg.cursor_to(0,0);
    key.print_key(k);
    process.stdin.setRawMode(true).setEncoding('utf8').resume().on('data',i=>react_to(i));
}




