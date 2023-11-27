![Screenshot 2023-01-14 at 5 07 55 AM](https://user-images.githubusercontent.com/90075803/212466978-4755b046-a3c5-493d-9b58-17341d48bafe.png)
# pre-wasi-key

This program is especially intended for WebAssembly runtimes. It creates a random key for the symmetric crypto system 'pre.' This is implemented in Go elsewhere in this repo, but I am currently working on the Rust version, this time separating key-creation from encryption/decryption. The screen above features the first working version. After giving access to the working directory, you can follow positive integer arguments for RANGE , INPUT_LENGTH  , PREFIX_CODE_LENGTH , RESPONSES , STATES.  Note that NOT ALL COMBINATIONS WORK (for mathematical reasons that become apparent upon reflection.) I may try to formalize this. At the moment the program just aborts after a certain number of tries (for instance, if it's asked to do the impossible.) I'd be grateful for any advice on slicker solutions, etc. The last argument is the alphabet (your prefered symbols for displaying what are actually u8's under the hood.)

For instance, in the screenshot, I used:

`wasmer pre-wasi-gen.wasm --dir=. 3 3 3 3 6 9 'O|@'`

Each key is a vector of states (represented above on separate lines), and each state is a vector of responses (these are enclosed within parentheses). Each response encodes (reads writes next_state). Because each state's responses together write a prefix code, the encoding can be inverted. I find this approach interesting because it's difficult to tokenize the ciphertext. The other feature is the pattern matching that writes fewer symbols than it reads. Together these lead to a situation where shorter inputs can have longer outputs (and the reverse.) Here's the application of a different random key. Note that a certain number of rounds are used, also reversing the string between rounds. 



![image](https://user-images.githubusercontent.com/90075803/212467549-502c2173-dcc3-4acc-b4b2-2fb15477c8cb.png)

