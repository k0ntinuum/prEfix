mod symbol;use symbol::*;
mod pre;use pre::*;
mod inp;use inp::*;
mod print; use print::*;
mod state;use state::*;
mod file;use file::*;
use std::env; 
fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() < 8 {
        print!("invoke with arguments as \npre-wasi-gen range max_inp max_pre num_responses num_states alphabet ");
        //std::process::exit(0);
    }
    let range = match args[1].parse::<u8>() {
        Ok(u) => u,
        Err(_) => 2,
    };
    let max_inp = match args[2].parse::<usize>() {
        Ok(u) => u,
        Err(_) => 2,
    };
    let max_pre = match args[3].parse::<usize>() {
        Ok(u) => u,
        Err(_) => 2,
    };
    let num_responses = match args[4].parse::<usize>() {
        Ok(u) => u,
        Err(_) => 2,
    };
    let num_responses = match args[5].parse::<usize>() {
        Ok(u) => u,
        Err(_) => 2,
    };
    let num_states = match args[6].parse::<usize>() {
        Ok(u) => u,
        Err(_) => 2,
    };
    let alphabet = &args[7];
    let k = random_key(range, max_inp, max_pre, num_responses,9);
    //print_key(&k, &"O|@$".to_string());
    //print!("{}\n",key_as_string(&k,&"O|@$".to_string() ))
    print_key(&k, alphabet);
    print!("{}\n",key_as_string(&k,alphabet ));
    write_key(&k, &"O|@$".to_string());

}