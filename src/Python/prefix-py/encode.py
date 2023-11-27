def _encode(key, mode, plaintext):
    for i in range(len(key)):
        finds = key[mode][i][0]
        if plaintext.startswith(finds):
            return (key[mode][i][1], plaintext[len(finds):],key[mode][i][2])
        
def encode(key, plaintext):
    mode = 0
    ciphertext = ''
    #print( ciphertext,' ', plaintext)
    while not plaintext == '':
        result = _encode(key, mode, plaintext)
        
        ciphertext += result[0]
        plaintext = result[1]
        mode = result[2]
        #print('r =', result)
        #print( ciphertext,' ', plaintext)
    return ciphertext
