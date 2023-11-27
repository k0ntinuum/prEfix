function is_prefix_code(w :: Array{Word}) :: Bool
    for i in eachindex(w)
        for j in eachindex(w)
            if i != j && prefix(w[i],w[j]) 
                return false 
            end
        end
    end
    return true
end


function random_writes(n,max_l)
    c = Word[]
    effort = 0
    for i in 1:n
        while effort < 10000
            l = rand(1:max_l)
            w = random_word(l)
            push!(c,w)
            if is_prefix_code(c)
                effort = 0
                @goto next_word
            else
                effort += 1
                pop!(c)
            end
        end
        throw("too much effort : try again (maybe different settings)")
        @label next_word
    end
    c
end