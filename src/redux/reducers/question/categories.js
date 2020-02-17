import {LOAD_QUESTION_CATEGORIES} from "../../actions/categories";

const initialState = [];

const categories = (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_QUESTION_CATEGORIES: {
            return payload;
        }
        default: return state;
    }
};

export default categories;