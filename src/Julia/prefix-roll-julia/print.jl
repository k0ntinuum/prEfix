function rgb(r,g,b) Base.print("\u1b[38;2;$(r);$(g);$(b)m") end


function as_string(v :: Word) :: String
    s = ""
    for i in eachindex(v) s *= alph[1 + v[i]] end
    s
end

function print(v :: Word) Base.print(as_string(v) *"\n") end


# function print(r :: Response)
#     @printf("mode %-2d reads %-3s  writes %-3s  goes %-2d\n", r.mode, as_string(r.reads),as_string(r.writes), r.goes)
# end

# function print(r :: Response)
#     hue = 155
#     rgb(hue,hue,hue)
#     @printf("%-2d  ", r.mode )
#     rgb(255,0,0)
#     @printf("%-3s  ",as_string(r.reads))
#     rgb(255,255,0)
#     @printf("    %-3s",as_string(r.writes) )
#     rgb(hue,hue,hue)
#     @printf("   %-2d\n", r.goes)
# end
function print(r :: Response)
    hue = 155
    rgb(hue,hue,hue)
    @printf("%3d ", r.mode )
    rgb(255,0,0)
    @printf("%-3s",as_string(r.reads))
    rgb(hue,hue,hue)
    @printf(" =>  ")
    rgb(255,255,0)
    @printf("%-3s ",as_string(r.writes) )
    rgb(hue,hue,hue)
    @printf("%-3d\n", r.goes)
end

function print(k :: Key)
    @printf "key = \n"
    for r in k print(r) end
    @printf "\n"
    rgb(255,255,255)
end