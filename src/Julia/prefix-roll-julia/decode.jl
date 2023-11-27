function decode(c :: Word , q :: Key) :: Word
    k = deepcopy(q)
    p :: Word = []
    m = 0
    i = 1
    while i <= length(c)
        for r in k
            if r.mode == m && prefix(r.writes,c[i:end])
                p = vcat(p, r.reads)
                roll = r.reads[1]
                i += length(r.writes)
                roll_key(k,m,p[end])
                m = r.goes
                @goto next_mode
            end
        end
        @label next_mode
    end
    p
end
