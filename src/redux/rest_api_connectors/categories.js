const API = "http://localhost:3000/categories";

const fetchCategories = (loaders) => (dispatch) => {
    try {
        fetch(API)
            .then(response => response.json())
            .then(categories => {
                if(loaders) loaders.forEach(loader => dispatch(loader(categories)))
            })
            .catch(error => console.warn(error))
    } catch (error) {
        console.warn(error);
    }
};

export {fetchCategories};