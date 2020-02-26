import {START_FETCHING_CATEGORIES, FETCHING_SUCCESS, FETCHING_ERROR} from "../../actions/categories";

const initialState = {
    isFetching: false,
    categories: [],
    error: null
};

const categories = (state = initialState, {type, payload}) => {
    switch (type) {
        case START_FETCHING_CATEGORIES: {
            return {
                ...state,
                isFetching: true
            };
        }
        case FETCHING_SUCCESS: {
            return {
                isFetching: false,
                categories: [...payload],
                error: null
            }
        }
        case FETCHING_ERROR: {
            return  {
                isFetching: false,
                categories: [],
                error: payload
            }
        }
        default: return state;
    }
};

export default categories;