import { SAVE_QUESTION, REMOVE_QUESTION, LOAD_QUESTIONS } from "../../actions/questions";

const initialState = [];

const questions = (state = initialState, {type, payload}) => {
    switch (type) {
        case SAVE_QUESTION: {
            return [...state, payload];
        }
        case REMOVE_QUESTION: {
            const newState = state.filter(q => q.id != payload);
            return [...newState];
        }
        case LOAD_QUESTIONS: {
            return [...payload];
        }
        default: return state;
    }
};

export default questions;