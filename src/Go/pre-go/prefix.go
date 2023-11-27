package main
import "strings"

func _pre(S []string) bool {
	for i := 0; i < len(S); i++ { for j := 0; j < len(S); j++ {
		if strings.HasPrefix(S[i], S[j]) && i != j { return false}
	}}
	return true
}

func pre(num, max int) (S []string) {
	for ;!_pre(S) || len(S) == 0; {S = words(num, max) }; return S
}