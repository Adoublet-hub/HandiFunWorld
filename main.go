package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/accueil.html")
}

func main() {
	http.HandleFunc("/", handler)

	// Permet de servir les fichiers CSS
	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("style"))))

	port := ":8080"
	fmt.Println("Serveur démarré sur http://localhost" + port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Erreur:", err)
	}
}
