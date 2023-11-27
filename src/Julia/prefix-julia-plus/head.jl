using Printf

const Word = Array{Int64}

struct Response
    mode :: Int64
    reads :: Word
    writes :: Word
    goes:: Int64
end

const Key = Array{Response}









