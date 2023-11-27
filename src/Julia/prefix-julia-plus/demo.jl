function random_word(n :: Int64) :: Word
    rand(0:length(alph)-1,n)
end

function demo()
    print(k)
    p = random_word(60)
    c = encode(p,k)
    d = decode(c,k)
    print(p)
    print(c)
    print(d)
    Base.print(p == d)
end

