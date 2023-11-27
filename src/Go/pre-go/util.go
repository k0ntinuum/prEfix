package main

func pow(b,e int) int { y := 1 ; for i := 0; i < e; i++ { y *= b } ;return y }
func rev(s []int) { for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 { s[i], s[j] = s[j], s[i] } }

func x_base_b(x, b int) []int {
	i := 0
	for ;pow(b,i) <= x; i++ {}
	y := make([]int,i)
	for j := len(y) - 1; j >= 0; j-- { y[j] = x / pow(b,j) ;  x -= y[j]*pow(b,j)  }
	rev(y) ; return y
}
