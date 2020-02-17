const LOAD_QUESTION_CATEGORIES = 'FETCH_QUESTION_CATEGORIES';

const loadCategories = (categories) => {
    return {
        type: LOAD_QUESTION_CATEGORIES,
        payload: categories
    }
};

export {LOAD_QUESTION_CATEGORIES, loadCategories};