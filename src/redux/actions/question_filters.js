import {sourceSelectCategoryList} from "../selectors/cateogies";

const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
const SET_KEY_WORDS = 'SET_KEY_WORD';
const SET_CUMULATIVE_CONDITION = 'SET_CUMULATIVE_CONDITION';
const RESET_FILTERS = 'RESET_FILTERS';
const SWITCH_CATEGORY = 'SWITCH_CATEGORY';

const switchCategory = ( id ) => {
    return {
        type: SWITCH_CATEGORY,
        payload: parseInt(id)
    }
};

const loadCategories = (categories ) => {
    return {
        type: LOAD_CATEGORIES,
        payload: sourceSelectCategoryList(categories)
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

export { LOAD_CATEGORIES, SET_KEY_WORDS, SET_CUMULATIVE_CONDITION, RESET_FILTERS, SWITCH_CATEGORY,
        loadCategories, setKeyWords, setCumulativeCondition, resetFilters, switchCategory }