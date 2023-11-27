import random
import secrets
import numpy as np

def a_random_word(alphabet, min_letters, max_letters):
    x = ''
    l = secrets.randbelow(max_letters - min_letters + 1) + min_letters
    for i in range(l):
        x += random.choice(alphabet)
    return x

def random_words(alphabet, min_letters, max_letters, n):
    w = []
    for i in range(n):
        w += [a_random_word(alphabet, min_letters, max_letters)]
    return w

def nth_word(alphabet, n):
    l = len(alphabet)
    y = ''
    pattern = str(np.base_repr(n,l))
    for i in range(len(pattern)):
        y += alphabet[int(pattern[i])]
    return y
    
def first_n_words(alphabet,n):
    w = []
    for i in range(n):
        w += [nth_word(alphabet,i)]
    return w


