package main

type handler struct {
	reads string
	writes string
	goes int
}

type mode []handler
type filter []mode 