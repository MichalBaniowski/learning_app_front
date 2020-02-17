import { LOAD_CATEGORIES, SET_KEY_WORDS, SET_CUMULATIVE_CONDITION, RESET_FILTERS, SWITCH_CATEGORY } from "../../actions/question_filters";

const initialState = {
    categories: [],
    keyWords: [],
    cumulativeCondition: false
};

const deepCopyCategories = (categories) => {
      return [...categories].map(category => {
          return {
              ...category
          }
      });
};

const resetCategories = (categories) => {
    categories.forEach(category => category.checked = false);
};

const questionFilters = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_CATEGORIES: {
            return {
                ...state,
                categories: [...payload]
            }
        }
        case SWITCH_CATEGORY: {
            const categoriesToReplace = deepCopyCategories(state.categories);
            categoriesToReplace.filter(category => category.id === payload)
                .forEach(category => category.checked = !category.checked);
            return {
                ...state,
                categories: [...categoriesToReplace]
            }
        }
        case SET_KEY_WORDS: {
            return {
                ...state,
                keyWords: [...payload]
            }
        }
        case SET_CUMULATIVE_CONDITION: {
            return {
                ...state,
                cumulativeCondition: payload
            }
        }
        case RESET_FILTERS: {
            const categories = deepCopyCategories(state.categories)
            resetCategories(categories);
            return {
                ...initialState,
                categories: categories
            };
        }
        default: return state;
    }
};

export default questionFilters;