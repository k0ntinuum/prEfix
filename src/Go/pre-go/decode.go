package main
import "strings"
func (m mode) decode(x string) (X, y string, g int) {
	for _ , h := range m {
		if strings.HasPrefix(x,h.writes) {
			X = x[len(h.writes):]
			y = h.reads
			g = h.goes
			return
		}
	}
	return
}
func (f filter) decode(x string) string {
	current_mode := 0
	y := ""
	z := ""
	for ;x != ""; {
		x,z, current_mode = f[current_mode].decode(x)
		y = y + z
	} 
	return y
}