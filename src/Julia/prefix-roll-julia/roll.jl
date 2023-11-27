function rolled_response(r :: Response, a :: Int64)
    Response(r.mode,r.reads, map(x -> (x + a)%length(alph), r.writes),r.goes)
end

function roll_key(k :: Key, m :: Int64, a :: Int64)
    for i in eachindex(k)
        if k[i].mode == m
            k[i] = rolled_response(k[i],a)
        end
    end
end