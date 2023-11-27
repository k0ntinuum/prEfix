pub fn cipher_from_key_plain(key : &Key, plain : &Message) -> Message {
    let mut state = 0;
    let mut position = 0;
    let mut cipher : Message = vec!();
    while position < plain.len() {
        print_state(&key[state], &"O|@".to_string());
        print!("\n");
        for response in &key[state] {
            print_response(&response, &"O|@".to_string());
            print!("\n");
            print!("plain = ");
            for i in position..plain.len() {
                print!("{}", plain[i]);
            }
            print!("\n");
            if plain[position..].starts_with(&response.read) {
                print!("read  {:?}\n",&response.read );
                print!("write {:?}\n",&response.write );
                for i in 0..response.write.len() {
                    cipher.push(response.write[i]);
                }
                state = response.go;
                print!("state = {}\n", state);
                position += response.read.len();
                break;  
            }
        }
    }
    cipher
}
pub fn plain_from_key_cipher(key : &Key, cipher : &Message) -> Message {
    let mut state = 0;
    let mut position = 0;
    let mut plain : Message = vec!();
    while position < cipher.len() {
        print_state(&key[state], &"O|@".to_string());
        print!("\n");
        for response in &key[state] {
            print_response(&response, &"O|@".to_string());
            print!("\n");
            print!("cipher = ");
            for i in position..cipher.len() {
                print!("{}", cipher[i]);
            }
            print!("\n");
            if cipher[position..].starts_with(&response.write) {
                print!("found   {:?}\n",&response.write );
                print!("replace {:?}\n",&response.read );
                for i in 0..response.read.len() {
                    plain.push(response.read[i]);
                }
                state = response.go;
                print!("state = {}\n", state);
                position += response.write.len();
                break;  
            }
        }
    }
    plain
}