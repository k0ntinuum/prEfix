package main

func (f filter) encrypt(x string, rounds int) string {
	for i := 0 ; i < rounds ; i++ {
		x = f.encode(x)
		x = reversed(x)
	}
	return x
}
func (f filter) decrypt(x string, rounds int) string {
	for i := 0 ; i < rounds ; i++ {
		x = reversed(x)
		x = f.decode(x)
	}
	return x
}

func reversed(x string) string {
	var y string
	for i := len(x) - 1; i >= 0; i-- {
		y += string(x[i])
	}
	return y
}