function encode(p :: Word , q :: Key) :: Word
    k = deepcopy(q)
    c :: Word = []
    m = 0
    i = 1
    while i <= length(p)
        for r in k
            if r.mode == m && prefix(r.reads,p[i:end])
                roll = p[i]
                c = vcat(c, r.writes)
                i += length(r.reads)
                roll_key(k,m,roll)
                m = r.goes
                @goto next_mode
            end
        end
        @label next_mode
    end
    c
end