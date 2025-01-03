package db

import (
    "context"
    "log"

    "github.com/jackc/pgx/v5/pgxpool"
)

var Pool *pgxpool.Pool

func Connect(connStr string) {
    var err error
    Pool, err = pgxpool.New(context.Background(), connStr)
    if err != nil {
        log.Fatalf("Unable to connect to database: %v\n", err)
    }

    log.Println("Database connection established")
}

func Close() {
    Pool.Close()
    log.Println("Database connection closed")
}

