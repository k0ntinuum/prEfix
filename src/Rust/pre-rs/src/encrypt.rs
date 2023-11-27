use crate::types::*;
pub fn encode(key : &Key, plain : &Message) -> Message {
    let mut state = 0;
    let mut position = 0;
    let mut cipher : Message = vec!();
    while position < plain.len() {
        for response in &key[state] {
            if plain[position..].starts_with(&response.read) {
                for i in 0..response.write.len() {
                    cipher.push(response.write[i]);
                }
                state = response.go;
                position += response.read.len();
                break;  
            }
        }
    }
    cipher
}
pub fn decode(key : &Key, cipher : &Message) -> Message {
    let mut state = 0;
    let mut position = 0;
    let mut plain : Message = vec!();
    while position < cipher.len() {
        for response in &key[state] {
            if cipher[position..].starts_with(&response.write) {
                for i in 0..response.read.len() {
                    plain.push(response.read[i]);
                }
                state = response.go;
                position += response.write.len();
                break;  
            }
        }
    }
    plain
}
pub fn encrypt(key : &Key, plain : &Message, rounds : usize) -> Message {
    let mut encrypted = plain.clone();
    for _ in 0..rounds {
        encrypted = encode(key,&encrypted);
        encrypted = reversed(&encrypted);
    }
    encrypted
}
pub fn decrypt(key : &Key, cipher : &Message, rounds : usize) -> Message {
    let mut decrypted = cipher.clone();
    for _ in 0..rounds {
        decrypted = reversed(&decrypted);
        decrypted = decode(key,&decrypted);
    }
    decrypted
}
pub fn reversed(message : &Message) -> Message {
    let mut reversed : Message = vec!();
    for i in message.iter().rev() {
        reversed.push(*i);
    }
    reversed
}