package main

import (
    "fmt"
    "net/http"
    "os"
)

// Handlers pour les pages HTML (inchangés)
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
func hnpwHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "template/hnpw.html")
}
func partenairesHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "template/partenaires.html")
}
func storytimeHandler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "template/storytime.html")
}

// Handler API équipe
func apiEquipeHandler(w http.ResponseWriter, r *http.Request) {
    file, err := os.ReadFile("team.json")
    if err != nil {
        http.Error(w, "Impossible de lire le fichier JSON", http.StatusInternalServerError)
        return
    }
    w.Header().Set("Content-Type", "application/json")
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Write(file)
}

func main() {
    // Servir le dossier "template" pour les fichiers statiques comme modales.json
    // Accessible par exemple via http://localhost:8080/template/modales.json
    http.Handle("/template/", http.StripPrefix("/template/", http.FileServer(http.Dir("template"))))

    // Servir dossier style (css, images, etc.)
    http.Handle("/style/", http.StripPrefix("/style/", http.FileServer(http.Dir("style"))))

    // Routes pour les pages HTML
    http.HandleFunc("/", accueilHandler)
    http.HandleFunc("/equipe", equipeHandler)
    http.HandleFunc("/evenements", evenementsHandler)
    http.HandleFunc("/funny", funnyHandler)
    http.HandleFunc("/handinfo", handinfoHandler)
    http.HandleFunc("/hnpw", hnpwHandler)
    http.HandleFunc("/partenaires", partenairesHandler)
    http.HandleFunc("/storytime", storytimeHandler)

    // Route API équipe
    http.HandleFunc("/api/equipe", apiEquipeHandler)

    port := ":8080"
    fmt.Println("Serveur démarré sur http://localhost" + port)
    err := http.ListenAndServe(port, nil)
    if err != nil {
        fmt.Println("Erreur:", err)
    }
}
