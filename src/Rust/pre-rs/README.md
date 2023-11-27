
# pre-rs

This is the Rust version of the Pre symmetric crypto system (which uses prefix or instantaneous codes when writing ciphertext). To see the prefix code aspect, just look at the yellow outputs on any given row (each row is a state). It's aimed at WebAssembly runtimes in the terminal in particular. There's a separate key-generator program in another repo. The images below show how it works. Basically you need a key.txt and either a plain.txt or cipher.txt file in the working directory. The program will encrypt or decrypt as appropriate. The colorful output is a representation of the key. The arguments are the number of rounds and the alphabet. 

![wasi-pre-1](https://user-images.githubusercontent.com/90075803/212541665-64473fdc-f528-48c1-ac00-c15f1c85a0d8.png)

![wasi-pre-2](https://user-images.githubusercontent.com/90075803/212541675-912f0fcb-2e2b-4609-8eb2-9f204f0d5463.png)

Here's a slightly more recent photo showing pre and key working together. A plaintext and both tools are already present. A key is generated using key.wasm. Then a ciphertext is created using pre.wasm and key.txt. Then the plain text is erased so that pre.wasm will know that it should operate in decryption mode. Note that pre.wasm always checks encryptions and decryptions by undoing its process and making sure the original is recovered.

![Screenshot 2023-01-15 at 10 13 39 PM](https://user-images.githubusercontent.com/90075803/212591241-18ffee0b-89ab-463a-bef0-0c8e3683049c.png)
