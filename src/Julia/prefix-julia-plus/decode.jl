function decode(c :: Word , q :: Key) :: Word
    k = deepcopy(q)
    p :: Word = []
    m = 0
    i = 1
    while i <= length(c)
        for r in k
            if r.mode == m && prefix(r.writes,c[i:end])
                #push!(c,r.writes)
                p = vcat(p, r.reads)
                i += length(r.writes)
                m = r.goes
                @goto next_mode
            end
        end
        @label next_mode
    end
    p
end