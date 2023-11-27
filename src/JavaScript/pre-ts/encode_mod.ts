
export function encode(key : key, plain_text : string ) : [ string , history ] {
    let history : history = [];
    let finds : string; let puts : string; let goes : number;
    let mode = 0;let cipher_text = '';
    while ( plain_text != '') {
        [finds, puts, goes]  = code_next(key, mode, plain_text, 0);
        cipher_text += puts;
        plain_text = plain_text.slice(finds.length);
        history.push([mode.toString(),finds,puts]);
        mode= goes;
    }
    return [cipher_text, history];
}




export function decode(key : key, cipher_text : string ) : [ string , history ] {
    let history : history = [];
    let finds : string; let puts : string; let goes : number;
    let mode = 0;let plain_text = '';
    while ( cipher_text != '') {
        [finds, puts, goes]  = code_next(key, mode, cipher_text, 1);
        //[finds, puts, goes]  = decode_next(key, mode, cipher_text);
        plain_text += finds;
        cipher_text = cipher_text.slice(puts.length);
        history.push([mode.toString(),puts,finds]);
        mode = goes;
    }
    return [plain_text, history];
}

function code_next(key : key, mode : number , text : string, target_index : number ) : [string, string, number] { 
    for (let i = 0; i < key[mode].length ; i++) {
        if (text.startsWith(key[mode][i][target_index])) 
        return [key[mode][i][0], key[mode][i][1], key[mode][i][2]];
    }
    throw new Error('coding failure');
}