import { START_FETCHING_QUESTIONS, FETCHING_ERROR, FETCHING_SUCCESS } from "../../actions/questions";

const initialState = {
    isFetching: false,
    questions: [],
    error: null
};

const questions = (state = initialState, {type, payload}) => {
    switch (type) {
        case START_FETCHING_QUESTIONS: {
            return {
                ...state,
                isFetching: true
            };
        }
        case FETCHING_SUCCESS: {
            return {
                isFetching: false,
                questions: [...payload],
                error: null
            }
        }
        case FETCHING_ERROR: {
            return {
                isFetching: false,
                questions: [],
                error: payload
            }
        }
        default: return state;
    }
};

export default questions;