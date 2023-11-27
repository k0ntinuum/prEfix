function encrypt(p,k,r)
    c = copy(p)
    for i in 1:r
        c = encode(c,k)
        c = reverse(c)
    end
    c
end

function decrypt(c,k,r)
    p = copy(c)
    for i in 1:r
        p = reverse(p)
        p = decode(p,k)
    end
    p
end

