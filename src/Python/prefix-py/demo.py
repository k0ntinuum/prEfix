from encode import *
from decode import *
from words import *
from tg import *
import numpy as np

def set_rgb(r,g,b):
    print(f"\x1b[38;2;{r};{g};{b}m", end = '')

def print_key(k):
    for i in range(len(k)):
        for j in range(len(k[i])):
            x = k[i][j]
            set_rgb(255,255,255)
            print(f"{i:3}{j:3}      ",end='')
            set_rgb(255,255,0)
            print(f"{x[0]:10s}",end='')
            set_rgb(255,0,0)
            print(f"{x[1]:10s}",end='')
            set_rgb(255,255,255)
            print(f"{x[2]:2d}",end='')
            print()
        print()

def alt_print_key(k):
    key_col = 80
    for i in range(len(k)):
        for j in range(len(k[i])):
            x = k[i][j]
            set_rgb(255,255,0)
            cursor_to((len(k[0])+1)*i+j ,key_col)
            print(f"{x[0]:s}",end='')
            set_rgb(255,0,0)
            print(f"{x[1]:s}",end='')
            set_rgb(155,155,155)
            print(f"{x[2]:d}",end='')
            print("                  ")
        print()

def space(n):
    s = ''
    for i in range(n):
        s += ' '
    return s
    

def alt_demo_words(words, alphabet, k, n, max_letters):
    for i in range(n):
        #w = a_random_word(alphabet, 1, max_letters)
        encode_width = 60
        w = words[i]
        e = encode(k,w)
        e = e + space(encode_width - len(e))
        #e = e + space(20)
        set_rgb(255,255,255)
        cursor_to(i , 0)
        print(f"  f {words[i]:10s}",end='')
        set_rgb(255,255,0)
        print(f" {e:40s}",end='')
        print()



