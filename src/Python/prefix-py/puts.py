from secrets import randbelow
from words import *

def _is_prefix_code(words):
    for i in range(0, len(words)):
        for j in range(0, len(words)):
            if i == j: 
                continue
            if words[i].startswith(words[j]):
                return False
    return True


def random_puts(alphabet, num_words, max_letters):
    y = []
    count = 0
    for i in range(0,num_words):
        while True:
            l = randbelow(max_letters) + 1
            w = a_random_word(alphabet, 1, l)
            count += 1
            if _is_prefix_code(y + [w]):
                y += [w]
                break
            if count > 10000:
                return []
    return y