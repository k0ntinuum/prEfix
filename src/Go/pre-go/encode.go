package main
import "strings"
func (m mode) encode(x string) (X ,y string, g int) {
	for _,h := range m {
		if strings.HasPrefix(x,h.reads) {
			X = x[len(h.reads):]
			y = h.writes
			g = h.goes
			return
		}
	}
	return
}
func (f filter) encode(x string) (string) {
	current_mode := 0
	y := ""
	z := ""
	for ;x != ""; {
		x,z, current_mode = f[current_mode].encode(x)
		y = y + z
	} 
	return y
}