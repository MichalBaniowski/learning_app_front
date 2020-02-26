import React, {useEffect} from "react";
import { connect } from 'react-redux';
import FiltersPanel from "../../components/utils/FiltersPanel";
import QuestionFilters from "./QuestionFilters";
import QuestionList from "./QuestionList";
import { fetchQuestions } from "../../redux/rest_api_connectors/questions";
import { fetchCategories } from "../../redux/rest_api_connectors/categories";

const Questions = ({fetchQuestions, fetchCategories}) => {

    useEffect(() => {
        fetchQuestions();
        fetchCategories();
    }, []);

    return (
        <>
            <FiltersPanel panelName='Filtry'>
                <QuestionFilters/>
            </FiltersPanel>
            <QuestionList/>
        </>
    )
};

const mapDispatch = (dispatch) => {
    return {
        fetchQuestions: () => fetchQuestions()(dispatch),
        fetchCategories: () => fetchCategories()(dispatch)
    }
};

export default connect(null, mapDispatch)(Questions);