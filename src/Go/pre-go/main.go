package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main(){
	rand.Seed(time.Now().UTC().UnixNano())
	// for i := 0 ; i < 100; i++ {
	// 	fmt.Printf("f(%v) = %v\n", i, nth_word(i))
	// }
	var F filter
	var x string
	rounds := 3
	gray :=100
	// var y string
	// var z string
	fmt.Printf("\n\n")
	for i := 0 ; i < 100; i++ {
		F = random_filter(len(alphabet)+3,3,34)
		x = nth_word(i)
		set_rgb(gray,gray,gray)
		fmt.Printf("   f(")
		set_rgb(255,0,0)
		fmt.Printf("  %-7v",x)
		set_rgb(gray,gray,gray)
		fmt.Printf("  ) == ")
		set_rgb(255,255,0)
		fmt.Printf("%v\n",F.encrypt(x,rounds))
		if F.decrypt(F.encrypt(x,rounds),rounds) != x { fmt.Printf("error at %v",x)}
		//fmt.Printf("G = %v\n",F.encrypt(x,rounds),rounds)
	}
}
