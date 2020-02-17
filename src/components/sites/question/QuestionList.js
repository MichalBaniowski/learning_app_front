import React, {useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


const QuestionList = ({questions}) => {
    return (
        <Accordion>
            {questions.map(question => {
                return <QuestionCard key={question.id} question={question}/>
            })}
        </Accordion>
    )
};

const QuestionCard = ({question}) => {

    const activeQuestion = 'active-question';
    const [questionState, setQuestionState] = useState({
        active: false,
        questionClass: ''
    });

    const onClickQuestion = () => {
        setQuestionState({
            active: !questionState.active,
            questionClass: questionState.active ? '' : activeQuestion
        })
    };

    return <Card>
        <Accordion.Toggle as={Card.Header}
                          eventKey={question.id}
                          className={questionState.questionClass}
                          onClick={onClickQuestion}>
            <Row>
                <Col sm = '8'>
                    {question.question}
                </Col>
                <Col sm = '4'>
                    {question.categories.map(category => {
                        return category + ' ';
                    })}
                </Col>
            </Row>
        </Accordion.Toggle>
        <AccordionCollapse eventKey={question.id}>
            <Card.Body>
                <Row>
                    <Col md={6}>
                        <ListGroup>
                            {Object.entries(question.possibleAnswers).map((keyValue, index) => {
                                return <ListGroupItem key={index} variant="secondary">
                                    {keyValue[0]}: {keyValue[1]}
                                </ListGroupItem>
                            })}
                        </ListGroup>
                    </Col>
                    <Col md={6} className="d-flex flex-column">
                        <ButtonGroup>
                            <Button variant="outline-secondary">Button</Button>
                            <Button variant="outline-secondary">Button</Button>
                            <Button variant="outline-secondary">Button</Button>
                            <Button variant="outline-secondary">Button</Button>
                        </ButtonGroup>
                        <Container>
                            Statystyki
                        </Container>
                    </Col>
                </Row>
            </Card.Body>
        </AccordionCollapse>
    </Card>
};

export default QuestionList;