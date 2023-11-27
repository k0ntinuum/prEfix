# pre
This program implements a symmetric cryptosystem that features prefix codes. The number of symbols read and the number of symbols written need not be equal, and either can be greater.
All cipher text is expressed in prefix codes. Since the union of prefix codes is not itself a prefix code, this 'should' make the ciphertext difficult to tokenize in the first place.

The system also sometimes consumes multiple symbols when reading the plaintext, sometimes replacing them with fewer, though in general the cipher text is longer than the plain text, and this effect accumulates with every round. Each filter can function as an indepedent system/key. It's also easy to 'stack' these filters, use them in a given order, at the expensive of a larger key. 

To me this system is more a sculpture than a tool, though the contstraint of it actually working as a cryptosystem is important to me. 


![pre-2](https://user-images.githubusercontent.com/90075803/209585444-23fd6c28-29cf-493b-bbb9-42dc53711912.png)


![pre-1](https://user-images.githubusercontent.com/90075803/209585437-51484621-0484-4bc3-a098-7a3785c8c514.png)

![pre-3](https://user-images.githubusercontent.com/90075803/209585567-b8e5f526-1ae9-4a9c-b618-70d843e3110a.png)

![pre-5](https://user-images.githubusercontent.com/90075803/209585576-96a8c31a-592f-4cc6-8b29-bc2af8476e19.png)

![pre-6](https://user-images.githubusercontent.com/90075803/209585585-b63442d8-c197-4b95-b33b-f1bda1dceead.png)

![pre-8](https://user-images.githubusercontent.com/90075803/209585598-5f0a68fe-8d91-4762-bc03-882d10fc4249.png)

