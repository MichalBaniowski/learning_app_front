import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomMultipleSelect from "../../utils/CustomMultipleSelect";
import {selectedCategories} from "../../../redux/selectors/cateogies";

const QuestionFilters = ({ setKeywords, setCumulativeCondition, resetFilters, onCategoryChose, questionFilters, fetchCategories }) => {

    useEffect(() => {
       fetchCategories();
       console.log('question filters');
    }, []);

    const [categoryFilter, setCategoryFilter] = useState('');

    const onCategoryCheck = (e) => {
        onCategoryChose(e.target.name);
    };

    const onCategoryFiltersChange =(e) => {
        setCategoryFilter(e.target.value);
    };

    // const displayCategories = () => {
    //     if(categoryFilter) {
    //         return questionFilters.categories.filter(category => category.name.includes(categoryFilter));
    //     }
    //     return questionFilters.categories;
    // };

    const onCategoryFilterChange = (e) => {

    };

    return (
        <Form>
            <Form.Group as={Row}>
                <Col sm='3'>
                    <Form.Label>Kategorie</Form.Label>
                    <CustomMultipleSelect
                        sourceElements={questionFilters.categories}
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

export default QuestionFilters;