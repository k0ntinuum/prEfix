
export function print(x) {
    process.stdout.write(x);
}
export function cursor_to(r,c) {
    print(`\x1b[${r};${c}H`)
}
export function cls() {
    print(`\x1b[2J`);
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
