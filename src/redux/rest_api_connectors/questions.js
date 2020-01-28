import { loadQuestions } from "../actions/questions";

const API = "http://localhost:3000/questions";

const fetchQuestions = () => (dispatch) => {
    try {
        fetch(API)
            .then(data => data.json())
            .then(questions => dispatch(loadQuestions(questions)));
    } catch (error) {
        console.log(error);
    }
};

export {fetchQuestions};