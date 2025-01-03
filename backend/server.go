package main

import (
    "log"
    "net/http"

    "backend/api"
    "backend/db"
)

func main() {
    connStr := "postgres://postgres:mysecretpassword@localhost:5432/words"
    db.Connect(connStr)
    defer db.Close()

    http.HandleFunc("/api/words", api.HandleWords)

    log.Println("Server is running on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

