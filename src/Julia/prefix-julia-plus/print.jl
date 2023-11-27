function as_string(v :: Word) :: String
    s = ""
    for i in eachindex(v) s *= alph[1 + v[i]] end
    s
end

function print(v :: Word) Base.print(as_string(v) *"\n") end


function print(r :: Response)
    @printf("%02d %-3s %-3s %02d\n", r.mode, as_string(r.reads),as_string(r.writes), r.goes)
end

function print(k :: Key)
    for r in k print(r) end
end