import words
import numpy as np
from words import a_random_word
from prefix_codes import random_prefix_code
import prefix_codes
import finds

def random_square_mode(finds, alphabet, num_words, num_letters, num_modes):
    prefix_code = random_prefix_code( alphabet,len(finds), num_letters);
    if prefix_code == []:
        return []
    goes = np.random.permutation(num_modes)
    for i in range(0,len(finds)):
        mode += [(finds[i], prefix_code[i],goes[i]) ]
    return mode