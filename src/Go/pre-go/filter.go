package main

func random_filter(width, length, modes int) filter {
	F := make(filter, modes)
	for i:=0; i < modes; i++ {
		F[i] = random_mode(width, length, modes)
	}
	return F
}




