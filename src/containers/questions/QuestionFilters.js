import React, { useState } from "react";
import {connect} from 'react-redux';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomMultipleSelect from "../../components/utils/CustomMultipleSelect";
import {
    resetFilters,
    setCumulativeCondition,
    setKeyWords,
    setSelectedCategories
} from "../../redux/actions/question_filters";

const QuestionFiltersComponent = ({ setKeywords, setCumulativeCondition, resetFilters, setSelectedCategories, questionFilters }) => {

    const [ categoriesSourceFilter, setCategoriesSourceFilter ] = useState([]);

    const getCategories = () => {
        return[
            {
                id: 1,
                name: 'dupa',
                checked: false
            },
            {
                id: 2,
                name: 'zupa',
                checked: false
            },
            {
                id: 3,
                name: 'gapa',
                checked: false
            },
            {
                id: 4,
                name: 'sergserhgsets',
                checked: false
            },
            {
                id: 5,
                name: 'fartheth',
                checked: false
            },
            {
                id: 6,
                name: 'popolupo',
                checked: false
            },
            {
                id: 7,
                name: 'czesio',
                checked: true
            }
        ]
    };

    const onCategoryCheck = (id) => () => {
        console.log(id);
    };

    return (
        <Form>
            <Form.Group as={Row}>
                <Col sm='3'>
                    <Form.Label>Kategorie</Form.Label>
                    <CustomMultipleSelect
                        sourceElements={getCategories()}
                        keyName='id'
                        labelName='name'
                        checkedName='checked'
                        onClick={onCategoryCheck}
                    />
                </Col>
            </Form.Group>
        </Form>
    )
};


const mapState = ({questionFilters}) => {
    return {
        questionFilters: questionFilters,
    }
};

const mapDispatch = (dispatch) => {
    return {
        setSelectedCategories: (selectedCategories) => dispatch(setSelectedCategories(selectedCategories)),
        setKeywords: (keyWords) => dispatch(setKeyWords(keyWords)),
        setCumulativeCondition: (cumulativeCondition) => dispatch(setCumulativeCondition(cumulativeCondition)),
        resetFilters: () => dispatch(resetFilters())
    }
};

export default connect(mapState, mapDispatch)(QuestionFiltersComponent);