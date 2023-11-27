use crate::types::*;
use std::fs::*;
use std::io::Write;
pub fn symbol_from_string(string : &str, alphabet : &str) -> Symbol {
    let mut symbol : Symbol = vec!();
    for c in string.chars() {
        if c != '\n' {
            match alphabet.find(c) {
                Some(index) => symbol.push(index as u8),
                None => panic!(),
            }
        }
    }
    symbol
}
pub fn message_from_string(string : &str, alphabet : &str) -> Symbol {
    let mut message : Message = vec!();
    for c in string.chars() {
        if c != '\n' {
            match alphabet.find(c) {
                Some(index) => message.push(index as u8),
                None => panic!("could not find {} \n",c),
            }

        }
        
    }
    message
}
pub fn response_from_string(string : &str, alphabet : &str) -> Response {
    let mut sliced = string.split(",").map(|x| x.to_string()).collect::<Vec<String>>();
    if sliced.len() != 3 {
        panic!();
    }
    for i in 0..sliced.len() {
        sliced[i] = no_paren(&sliced[i].clone());
    }
    let read = symbol_from_string(&sliced[0],alphabet);
    let write = symbol_from_string(&sliced[1],alphabet);
    let go  = sliced[2].parse::<usize>().unwrap();
    Response {read, write , go  }
}
pub fn no_paren(string : &str) -> String {
    let mut stripped = "".to_string();
    for c in string.chars() {
        if c == ')' || c == '(' {
            continue;
        }
        stripped.push(c);
    }
    stripped
}
pub fn state_from_string(string : &str, alphabet : &str) -> State {
    let sliced: Vec<&str> = string.split(")(").collect();
    let mut state = vec!();
    for s in sliced {
        state.push(response_from_string(s,alphabet));
    }
    state
}
pub fn key_from_string(string : &str, alphabet : &str) -> Key {
    let mut key = vec!();
    for s in string.lines() {
        key.push(state_from_string(s,alphabet));
    }
    key
}
pub fn string_from_file(filename : &str) -> String  {
    let string = read_to_string(filename).expect("no file!");
    string

}
pub fn key_from_file(filename : &str, alphabet : &str ) -> Key {
    let string = read_to_string(filename).expect("no file!");
    key_from_string(&string, alphabet)
}
pub fn message_from_file(filename : &str, alphabet : &str ) -> Message {
    let string = read_to_string(filename).expect("no file!");
    message_from_string(&string, alphabet)
}
    
