import React from "react";
import {connect} from 'react-redux';
import {fetchCategories} from "../../redux/rest_api_connectors/categories";
import QuestionFilters from "../../components/sites/question/QuestionFilters";
import {
    resetFilters,
    setCumulativeCondition,
    setKeyWords,
    loadCategories, switchCategory
} from "../../redux/actions/question_filters";

const mapState = ({questionFilters}) => {
    return {
        questionFilters
    }
};

const mapDispatch = (dispatch) => {
    return {
        fetchCategories: () => fetchCategories([loadCategories])(dispatch),
        onCategoryChose: (id) => dispatch(switchCategory(id)),
        setKeywords: (keyWords) => dispatch(setKeyWords(keyWords)),
        setCumulativeCondition: (cumulativeCondition) => dispatch(setCumulativeCondition(cumulativeCondition)),
        resetFilters: () => dispatch(resetFilters())
    }
};

export default connect(mapState, mapDispatch)(QuestionFilters);