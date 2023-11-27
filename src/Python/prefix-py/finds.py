
from words import *

def _no_repeats(words):
    for i in range(0, len(words)):
        for j in range(0, len(words)):
            if i != j and words[i] == words[j]:
                return False
    return True

def _random_words(alphabet, num_words,min_letters, max_letters):
    w = []
    for i in range(num_words):
        w += [a_random_word(alphabet, min_letters, max_letters)]
    return w

def _random_unique_words(alphabet, num_words,min_letters, max_letters):
    while True:
        w = _random_words(alphabet, num_words,min_letters, max_letters)
        if _no_repeats(w):
            break
    return w

def random_finds(alphabet, num_words, max_letters):
    finds = _random_unique_words(
        alphabet,
        num_words-len(alphabet),
        2,
        max_letters
    )
    for a in alphabet:
        finds += [a]
    return finds

