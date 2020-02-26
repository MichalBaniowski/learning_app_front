import { startFetchingCategories, fetchingSuccess, fetchingError } from "../actions/categories";

const API = "http://localhost:3000/categories";

const fetchCategories = () => (dispatch) => {
    try {
        dispatch(startFetchingCategories());
        fetch(API)
            .then(response => response.json())
            .then(categories => {
                console.log(categories, '--------------------');
                dispatch(fetchingSuccess(categories))
            })
            .catch(error => dispatch(fetchingError(error)))
    } catch (error) {
        dispatch(fetchingError(error));
    }
};

export {fetchCategories};