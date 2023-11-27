mod types;use types::*;
mod string;use string::*;
mod print;use print::*;
mod encrypt;use encrypt::*;
use std::env; 
use std::path::Path;
fn main() {
    // let args: Vec<String> = env::args().collect();
    // if args.len() < 4 {
    //     print!("Not enough arguments.\n");
    //     std::process::exit(0);
    // }
    // let a = &args[1];
    // let k = key_from_file(&"key.txt".to_string(), a);
    // print_key(&k,&a);


    let args: Vec<String> = env::args().collect();
    if !Path::new("cipher.txt").exists() && !Path::new("plain.txt").exists() {
        print!("This program needs either plain.txt or cipher.txt (but not both) in the same directory.");
        std::process::exit(0);
    }
    if Path::new("cipher.txt").exists() && Path::new("plain.txt").exists() {
        print!("This program needs either plain.txt or cipher.txt but not both in the same directory.");
        std::process::exit(0);
    }
    if args.len() < 3 {
        print!("This program need rounds (integer) and alphabet (string) as arguments.\n");
        std::process::exit(0);
    }
    let a = &args[2];
    let k = key_from_file(&"key.txt".to_string(), a);
    let rounds = match args[1].parse::<usize>() {
        Ok(u) => u,
        Err(_) => 0,
    };
    
    if !Path::new("cipher.txt").exists() && Path::new("plain.txt").exists() {
        print_key(&k,&a);
        let p = message_from_file(&"plain.txt".to_string(), a);
        print!("of plain.txt  = {}\n",  message_as_string(&p, a));
        let c = encrypt(&k,&p,rounds);
        let d = decrypt(&k,&c,rounds);
        if equal(&p,&d) {
            print!("SUCCESSFUL ENCRYPTION\n");
            write_message("cipher.txt".to_string(), &c, a);
        }
        
    }
    if Path::new("cipher.txt").exists() && !Path::new("plain.txt").exists() {
        print_key(&k,a);
        let c = message_from_file(&"cipher.txt".to_string(), a);
        let p = decrypt(&k,&c,rounds);
        let d = encrypt(&k,&p,rounds);
        if equal(&c,&d) {
            print!("SUCCESSFUL DECRYPTION\n");
            write_message("plain.txt".to_string(), &p, a);
        }
    };



    // let args: Vec<String> = env::args().collect();
    // let a = &args[2];
    // print!("a = {}\n",a);
    
    // let p = message_from_file(&"plain.txt".to_string(), a);
    // print_key(&k,&a);

    // if rounds == 0 {
    //     panic!();
    // }
    // let c = encrypt(&k,&p,rounds);
    // let d = decrypt(&k,&c,rounds);
    
    // print!("p = {}\n",  message_as_string(&p, &a));
    // print!("c = {}\n",  message_as_string(&c, &a));
    // print!("d = {}\n", message_as_string(&d, &a));
}
