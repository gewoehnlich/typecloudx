package main

import (
    "net/http"
    "backend/api"
)

func main() {
    http.HandleFunc("/api/words", api.HandleWords)
    http.ListenAndServe(":8080", nil)
}

