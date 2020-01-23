import { SAVE_QUESTION, REMOVE_QUESTION } from "../../actions/questions";

const initialState = [
    {
        "id": 1,
        "question": "Jak masz na imię",
        "possibleAnswers": {
            "a": "Janush",
            "b": "Maria",
            "c": "Zdzichu",
            "d": "Krzychu"
        },
        "correctAnswer": "c"
    },
    {
        "id": 2,
        "question": "Co lubisz robić",
        "possibleAnswers": {
            "a": "Kupe",
            "b": "Jajko",
            "c": "Na drutach",
            "d": "Tak"
        },
        "correctAnswer": "d"
    },
    {
        "id": 3,
        "question": "Gdzie jest Andrzej",
        "possibleAnswers": {
            "a": "w dupie",
            "b": "Nie wiem",
            "c": "Na wakacjach",
            "d": "Tak"
        },
        "correctAnswer": "d"
    },
    {
        "id": 4,
        "question": "Karton mleka?",
        "possibleAnswers": {
            "a": "Tak",
            "b": "nie",
            "c": "Kaczka",
            "d": "Może"
        },
        "correctAnswer": "d"
    },
    {
        "id": 5,
        "question": "Kiedy matka ma rację",
        "possibleAnswers": {
            "a": "zawsze",
            "b": "Jabłko",
            "c": "Po fakcie",
            "d": "Jutro"
        },
        "correctAnswer": "a"
    },
    {
        "id": 6,
        "question": "Masz już dość",
        "possibleAnswers": {
            "a": "tak",
            "b": "nie",
            "c": "może",
            "d": "chyba"
        },
        "correctAnswer": "c"
    },
    {
        "id": 7,
        "question": "Jak można być ślepym",
        "possibleAnswers": {
            "a": "można mieć pecha",
            "b": "można ",
            "c": "Na drutach",
            "d": "Tak"
        },
        "correctAnswer": "d"
    }
];

const questions = (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE_QUESTION: {
            return [...state, payload];
        }
        case REMOVE_QUESTION: {
            const newState = state.filter(q => q.id != payload);
            return [...newState];
        }
        default: return state;
    }
};

export default questions;