


function nth_word(n :: Int64) :: Word
    s = string(n, base = length(alph))
    a =  zeros(Int64, length(s))
    for i in eachindex(a)
        a[i] = parse(Int64, s[i:i], base = length(alph))
    end
    a
end

function random_word(n :: Int64) :: Word
    rand(0:length(alph)-1,n)
end

function demo()
    print(k)
    for i in 0:20
        #p = random_word(rand(2:13))
        p = nth_word(i)
        #print(p)
        c = encrypt(p,k, rounds)
        #print(c)
        @printf("f %-7s = %-50s\n",as_string(p),as_string(c))
        # d = decrypt(c,k, rounds)
        # print(d)
        # Base.print(p == d)
    end
end

