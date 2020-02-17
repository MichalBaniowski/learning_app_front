import { combineReducers }  from 'redux';
import questions from "./question/questions";
import categories from "./question/categories";
import questionFilters from "./question/question_filters";

export default combineReducers({
    questions,
    categories,
    questionFilters
});