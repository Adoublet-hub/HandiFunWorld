package main

import (
	"fmt"
	"net/http"
)

// Handler pour la page d'accueil
func accueilHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/accueil.html")
}

func equipeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Handler pour /equipe appelé")
	http.ServeFile(w, r, "template/equipe.html")
}

func evenementsHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/evenements.html")
}

func funnyHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/funny.html")
}

func handinfoHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/handinfo.html")
}

func hnpwHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/hnpw.html")
}

func partenairesHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/partenaires.html")
}

func storytimeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/storytime.html")
}


func main() {

	http.HandleFunc("/", accueilHandler)    // Page d'accueil
	http.HandleFunc("/equipe", equipeHandler) // Page L'équipe
	http.HandleFunc("/evenements", evenementsHandler)
	http.HandleFunc("/funny", funnyHandler)
	http.HandleFunc("/handinfo", handinfoHandler)
	http.HandleFunc("/hnpw", hnpwHandler)
	http.HandleFunc("/partenaires", partenairesHandler)
	http.HandleFunc("/storytime", storytimeHandler)
	// Permet de servir les fichiers CSS
	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("style"))))

	port := ":8080"
	fmt.Println("Serveur démarré sur http://localhost" + port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Erreur:", err)
	}
}
