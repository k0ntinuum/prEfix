function encode(p :: Word , q :: Key) :: Word
    k = deepcopy(q)
    c :: Word = []
    m = 0
    i = 1
    while i <= length(p)
        for r in k
            if r.mode == m && prefix(r.reads,p[i:end])
                #push!(c,r.writes)
                c = vcat(c, r.writes)
                i += length(r.reads)
                m = r.goes
                @goto next_mode
            end
        end
        @label next_mode
    end
    c
end