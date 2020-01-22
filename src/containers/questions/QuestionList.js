import React from "react";
import { connect } from 'react-redux';
import QuestionList from "../../components/sites/question/QuestionList";

const mapState = ({ questions }) => {
    return {
        questions
    }
};

export default connect(mapState)(QuestionList);