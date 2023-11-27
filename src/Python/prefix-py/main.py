from demo import *
from key import *
from tg import *
from getchar import *
from words import *
alphabet = 'O|'

max_letters = 7
num_words = 5
num_modes = 5
min_input_letters = 1
max_input_letters = 10
num_input_words = 20
#k = random_square_key(alphabet, num_words, max_letters)
cls()
k = random_key(alphabet, num_words, num_modes, max_letters)
w =  random_words(alphabet, min_input_letters, max_input_letters, num_input_words)
while True:
    cursor_to(0,0)
    alt_print_key(k)
    alt_demo_words(w,alphabet,k, num_input_words, max_letters)
    c = ''
    while c == '':
        c = getchar()
    if c == 'q':
        break
    if c == 'w':
        w =random_words(alphabet, min_input_letters, max_input_letters, num_input_words)
    if c == 'k':
        k = random_key(alphabet, num_words, num_modes, max_letters)
    if c == 'n':
        w = first_n_words(alphabet, num_input_words)
    
