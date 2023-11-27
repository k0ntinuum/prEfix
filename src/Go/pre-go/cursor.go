package main
import "fmt"
func set_rgb(r,g,b int) { fmt.Printf("\x1b[38;2;%d;%d;%dm",r,g,b);}
func cursor_to(r, c int) { fmt.Printf("\x1b[%d;%dH",r,c);}
func hide_cursor() { fmt.Printf("\x1b[?25l");}
