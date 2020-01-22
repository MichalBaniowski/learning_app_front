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