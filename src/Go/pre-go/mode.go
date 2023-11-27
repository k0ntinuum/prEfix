package main

import "math/rand"

//import "strings"

func random_mode(width, length, modes int) mode {
	M := make(mode,width);Q := inp(width,length);P := pre(width,length) 
	for i := range M { M[i] = handler {Q[i],P[i], rand.Intn(modes)} }
	return M
}

func inp(num, max int) []string {
	S := make([]string, num)
	for i:= 0 ; i < num - len(alphabet); i++ {
		w := word(rand.Intn(max-1) + 2)
		for ;_word_in(w,S); { w = word(rand.Intn(max-1) + 2 ) }
		S[i] = w
	}
	for i := 0; i < len(alphabet) ; i++ {
		S[num - len(alphabet) - i] = string(alphabet[i])
	}
	return S
}

func _word_in(w string,S []string) bool {
	for i := range S { if w == S[i] {return true}}
	return false
}



