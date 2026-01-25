from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Helper to load questions
def load_questions():
    try:
        with open("../data/perguntas.json", "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

@app.get("/")
def read_root():
    return {"message": "HIV Education Game API"}

@app.get("/cards")
def get_cards(category: str = None):
    questions = load_questions()
    if category:
        return [q for q in questions if q["category"] == category]
    return questions
