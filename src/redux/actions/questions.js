const SAVE_QUESTION = 'SAVE_QUESTION';
const REMOVE_QUESTION = 'REMOVE_QUESTION';
const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const save = (question) => {
    return {
        type: SAVE_QUESTION,
        payload: question
    }
};

const remove = (id) => {
    return {
        type: REMOVE_QUESTION,
        payload: id
    }
};

const loadQuestions = (questions) => {
    return {
        type: LOAD_QUESTIONS,
        payload: questions
    }
};

export {SAVE_QUESTION, REMOVE_QUESTION, LOAD_QUESTIONS, save, remove, loadQuestions};