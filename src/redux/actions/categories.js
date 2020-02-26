const START_FETCHING_CATEGORIES = 'START_FETCHING_CATEGORIES';
const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
const FETCHING_ERROR = 'FETCHING_ERROR';

const startFetchingCategories = () => {
    return {
        type: START_FETCHING_CATEGORIES
    }
};

const fetchingSuccess = (categories) => {
    return {
        type: FETCHING_SUCCESS,
        payload:categories
    }
};

const fetchingError = (error) => {
    return {
        type: FETCHING_ERROR,
        payload: error
    }
};

export {START_FETCHING_CATEGORIES, FETCHING_SUCCESS, FETCHING_ERROR,
        startFetchingCategories, fetchingSuccess, fetchingError};