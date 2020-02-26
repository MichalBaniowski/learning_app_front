const categoryFilterSourceList = (categories) => {
    console.log(categories);
    const result = {
        ...categories,
        categories: categories.categories.map(category => {
            return {
                ...category,
                checked: false
            }
        })
    };
    console.log(result);
    return result;
};

const selectedCategories = (categories) => {
    return categories.filter(category => category.checked);
};

export {categoryFilterSourceList, selectedCategories}