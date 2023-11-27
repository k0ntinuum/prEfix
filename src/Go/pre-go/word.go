package main
import "math/rand"

func letter() string { return string( alphabet[rand.Intn(len(alphabet)) ] )}
func word(length int) (s string) { for i := 0; i< length;i++ {s += letter()};return}
func words(num, max int) ( W []string ) { for i := 0; i< num;i++ { W = append(W, word(rand.Intn(max) + 1)) };return}

func nth_word(n int) string {
	if n == 0 { return string(alphabet[0])}  
	y := ""
	for _,v := range x_base_b(n,len(alphabet)) {
		y += string(alphabet[v])
	}
	return y
}




