const START_FETCHING_QUESTIONS = 'LOAD_QUESTIONS';
const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
const FETCHING_ERROR = 'FETCHING_ERROR';

const startFetchingQuestions = () => {
    return {
        type: START_FETCHING_QUESTIONS
    }
};

const fetchingSuccess = (questions) => {
    return {
        type: FETCHING_SUCCESS,
        payload: questions
    }
};

const fetchingError = (error) => {
    return {
        type: FETCHING_ERROR,
        payload: error
    }
};

export { START_FETCHING_QUESTIONS, FETCHING_SUCCESS, FETCHING_ERROR,
    startFetchingQuestions, fetchingError, fetchingSuccess };