package api 

import (
    "encoding/json"
    "net/http"
)

type Response struct {
    Message string `json:"message"`
}

func HandleWords(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    data := Response {
        Message: "Hello, this is your API response!",
    }

    json.NewEncoder(w).Encode(data)
}

