pub type Symbol = Vec<u8>;
pub type Code = Vec<Symbol>;
pub type Message = Vec<u8>;
pub struct Response {
    pub read : Symbol,
    pub write : Symbol,
    pub go : usize,
}
pub type State = Vec<Response>;
pub type Key = Vec<State>;

pub fn equal(x : &Message, y : &Message) -> bool {
    if x.len() != y.len() {
        return false;
    }
    for i in 0..x.len() {
        if x[i] != y[i] {
            return false;
        }
    }
    true
}