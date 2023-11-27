function prefix(p :: Word, q :: Word)
    if length(q) < length(p) return false end
    for i in eachindex(p)
        if p[i] != q[i] return false end
    end
    true
end  