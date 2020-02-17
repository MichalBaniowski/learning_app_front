
const sourceSelectCategoryList = (categories) => {
    return categories.map(category => {
        return {
            ...category,
            checked: false
        }
    })
};

const selectedCategories = (categories) => {
    return categories.filter(category => category.checked);
};

export { sourceSelectCategoryList, selectedCategories }