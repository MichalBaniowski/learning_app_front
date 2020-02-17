import React from "react";
import { connect } from 'react-redux';
import { fetchQuestions } from "../../redux/rest_api_connectors/questions";
import Questions from "../../components/sites/question/Qusetions";

const mapState = ({questions, categories}) => {
    return {
        questions: questions,

    }
};

const mapDispatch = (dispatch) => {
    return {
        fetchQuestions: () => fetchQuestions()(dispatch),
    }
};

export default connect(mapState, mapDispatch)(Questions);