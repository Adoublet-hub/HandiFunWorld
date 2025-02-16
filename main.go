package main

import (
	"fmt"
	"net/http"
	"os"
)

// Structure pour un membre de l'équipe
type Member struct {
	Name        string `json:"name"`
	Role        string `json:"role"`
	Description string `json:"description"`
	Photo       string `json:"photo"`
}

// Handler API pour récupérer la liste des membres en JSON
func apiEquipeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("API /api/equipe appelée")

	// Lire le fichier JSON
	file, err := os.ReadFile("team.json")
	if err != nil {
		http.Error(w, "Impossible de lire le fichier JSON", http.StatusInternalServerError)
		return
	}

	// Définir les headers (CORS)
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*") // Permet aux requêtes externes

	// Envoyer le contenu du fichier JSON
	w.Write(file)
}

// Handlers pour les pages HTML
func accueilHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/accueil.html")
}
func equipeHandler(w http.ResponseWriter, r *http.Request) {
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
func hnpwHandler(w http.ResponseWriter, r *http.Request) { http.ServeFile(w, r, "template/hnpw.html") }
func partenairesHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/partenaires.html")
}
func storytimeHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "template/storytime.html")
}

func main() {
	// Routes pour les pages HTML
	http.HandleFunc("/", accueilHandler)
	http.HandleFunc("/equipe", equipeHandler)
	http.HandleFunc("/evenements", evenementsHandler)
	http.HandleFunc("/funny", funnyHandler)
	http.HandleFunc("/handinfo", handinfoHandler)
	http.HandleFunc("/hnpw", hnpwHandler)
	http.HandleFunc("/partenaires", partenairesHandler)
	http.HandleFunc("/storytime", storytimeHandler)

	// Route pour l'API équipe
	http.HandleFunc("/api/equipe", apiEquipeHandler)

	// Servir les fichiers statiques (CSS, images, etc.)
	http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("style"))))

	port := ":8080"
	fmt.Println("Serveur démarré sur http://localhost" + port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		fmt.Println("Erreur:", err)
	}
}
