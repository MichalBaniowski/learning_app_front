import { startFetchingQuestions, fetchingSuccess, fetchingError } from "../actions/questions";

const API = "http://localhost:3000/questions";

const fetchQuestions = () => (dispatch) => {
    try {
        dispatch(startFetchingQuestions());
        fetch(API)
            .then(data => data.json())
            .then(questions => {
                dispatch(fetchingSuccess(questions));
            })
            .catch((error) => dispatch(fetchingError(error)));
    } catch (error) {
        dispatch(fetchingError(error));
    }
};

export {fetchQuestions};