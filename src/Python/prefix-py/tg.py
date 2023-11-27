def cursor_to(r,c):
    print(f"\x1b[{r+1:d};{c+1:d}H",end = '')

def cls():
     print("\x1b[2J")


#printf("\x1b[%d;%dH",r,c);