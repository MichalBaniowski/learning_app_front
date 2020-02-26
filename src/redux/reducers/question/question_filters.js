import { SET_SELECTED_CATEGORIES, SET_KEY_WORDS, SET_CUMULATIVE_CONDITION, RESET_FILTERS } from "../../actions/question_filters";

const initialState = {
    selectedCategories: [],
    keyWords: [],
    cumulativeCondition: false
};

const questionFilters = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_SELECTED_CATEGORIES: {
            return {
                ...state,
                selectedCategories: [...payload]
            }
        }
        case SET_KEY_WORDS: {
            return {
                ...state,
                keyWords: [...payload]
            }
        }
        case SET_CUMULATIVE_CONDITION: {
            return {
                ...state,
                cumulativeCondition: payload
            }
        }
        case RESET_FILTERS: {
           return initialState;
        }
        default: return state;
    }
};

export default questionFilters;