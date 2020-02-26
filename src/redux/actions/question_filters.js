const SET_SELECTED_CATEGORIES = 'SET_SELECTED_CATEGORIES';
const SET_KEY_WORDS = 'SET_KEY_WORD';
const SET_CUMULATIVE_CONDITION = 'SET_CUMULATIVE_CONDITION';
const RESET_FILTERS = 'RESET_FILTERS';

const setSelectedCategories = (selectedCategories) => {
    return {
        type: SET_SELECTED_CATEGORIES,
        payload: selectedCategories
    }
};

const setKeyWords = ( keyWords ) => {
    return {
        type: SET_KEY_WORDS,
        payload: keyWords
    }
};

const setCumulativeCondition = ( cumulativeCondition ) => {
    return {
        type: SET_CUMULATIVE_CONDITION,
        payload: cumulativeCondition
    }
};

const resetFilters = () => {
    return {
        type: RESET_FILTERS
    }
};

export { SET_SELECTED_CATEGORIES, SET_KEY_WORDS, SET_CUMULATIVE_CONDITION, RESET_FILTERS,
        setSelectedCategories, setKeyWords, setCumulativeCondition, resetFilters }