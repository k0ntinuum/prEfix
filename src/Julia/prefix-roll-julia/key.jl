function random_mode(n, l, m, M)
    k = Response[]
    reads = random_reads(n,l)
    writes = random_writes(n, l)
    goes = random_goes(M)
    for i in 1:n
        push!(k, Response(m,reads[i], writes[i],goes[i]))
    end
    k
end
function random_key(n, l, M)
    k :: Key = []
    for i in 1:M
        m = random_mode(n, l, i-1, M)
        append!(k,m)
    end
    k
end