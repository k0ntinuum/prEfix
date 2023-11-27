from random import shuffle

def random_goes(num_modes):
    g = list(range(num_modes))
    shuffle(g)
    return g
