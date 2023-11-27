alph = "O|"

k = Response[]

push!(k,Response(0, [0,0],  [1,1],  0))
push!(k,Response(0, [0],  [1,0],  1))
push!(k,Response(0, [1],  [0],  1))
            
push!(k,Response(1, [1,1],  [1,1],  0))
push!(k,Response(1, [0],  [0,1],  0))
push!(k,Response(1, [1],  [1,0],  1))