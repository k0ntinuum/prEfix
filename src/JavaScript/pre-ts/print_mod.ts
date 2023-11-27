export function print(x) {
    process.stdout.write(x);
}

export function cursor_to(r,c) {
    print(`\x1b[${r};${c}H`)
}
export function cls() {
    print('\x1b[2J');
}

export function set_rgb(r,g,b) {
    print(`\x1b[38;2;${r};${g};${b}m`)
}
export function hide_cursor() {
    print(`\x1b[?25l`);
}
export function show_cursor() {
    print(`\x1b[?25h`);
}
export function print_history(message : string, plain_text :  string , cipher_text : string ,history  : history) : void {
    let col_space : number[] = [];
    print(`${message}\n`);
    print(`${plain_text}\n`);
    print(`${cipher_text}\n`);
    for (let i = 0 ; i < history.length; i++) {
        col_space.push(Math.max(history[i][0].length,history[i][1].length,history[i][2].length)+3);
    }
    for (let i = 0 ; i < history.length; i++) print(`${history[i][0].toString().padEnd(col_space[i])}`);
    print('\n');
    for (let i = 0 ; i < history.length; i++) print(`${history[i][1].toString().padEnd(col_space[i])}`);
    print('\n');
    for (let i = 0 ; i < history.length; i++) print(`${history[i][2].toString().padEnd(col_space[i])}`);
    print('\n\n\n\n\n');
    
}