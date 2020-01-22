const SAVE_QUESTION = 'SAVE_QUESTION';
const REMOVE_QUESTION = 'REMOVE_QUESTION';

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

export {SAVE_QUESTION, REMOVE_QUESTION, save, remove};