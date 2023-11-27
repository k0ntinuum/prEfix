use crate::types::*;
use crate::string::*;

pub fn write_code_from_state(s : &State) -> Code {
    let mut code = vec!();
    for  re in s {
        code.push(re.write);
    }
    code
}