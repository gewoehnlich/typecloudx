package api 

import (
    "encoding/json"
    "net/http"

    "backend/db"
)

type Response struct {
    Message string `json:"message"`
}

func HandleWords(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    err := db.Pool.QueryRow(context.Background(), "SELECT 'Hello from the database!'").Scan(&message)
    if err != nil {
        http.Error(w, "Database query failed", http.StatusInternalServerError)
        return
    }

    data := Response {
        Message: "Hello, this is your API response!",
    }

    json.NewEncoder(w).Encode(data)
}

