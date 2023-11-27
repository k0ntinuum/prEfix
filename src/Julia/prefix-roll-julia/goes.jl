function random_goes(n :: Int64)
    a = map(n -> n - 1,Random.randperm(n))
    b = map(n -> n - 1,Random.randperm(n))
    c = map(n -> n - 1,Random.randperm(n))        
    append!(a,b,c)
end