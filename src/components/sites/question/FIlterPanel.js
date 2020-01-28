import React, {useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterPanel = () => {

    const downArrowClass = 'fas fa-angle-down';
    const upArrowClass = 'fas fa-angle-up';

    const [filterState, setFilterState] = useState({
        open: false,
        arrowClassName: downArrowClass
    });

    const onFilterHeaderClick = () => {
        setFilterState({
            open: !filterState.open,
            arrowClassName: filterState.open ? downArrowClass : upArrowClass
        })
    };

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle className='filter-panel-header'
                                  as={Card.Header}
                                  eventKey={'open'}
                                  onClick={onFilterHeaderClick}>
                    <i className={filterState.arrowClassName}/><span>Filtry</span>
                </Accordion.Toggle>
                <AccordionCollapse eventKey={'open'}>
                    <Card.Body>
                        <Form>
                            <Form.Group as={Row}>
                                <Col sm='3'>
                                    <Form.Label>Kategoria</Form.Label>
                                    <Form.Control size='sm' as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                                <Col sm='3'>
                                    <Form.Label>Kategoria</Form.Label>
                                    <Form.Control size='sm' as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                                <Col sm='3'>
                                    <Form.Label>Kategoria</Form.Label>
                                    <Form.Control size='sm' as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>

                            </Form.Group>
                        </Form>
                    </Card.Body>
                </AccordionCollapse>
            </Card>
        </Accordion>
    )
};

export default FilterPanel;