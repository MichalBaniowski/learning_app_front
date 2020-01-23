import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";



const QuestionList = ({questions}) => {
    return(
        <Accordion>
            {questions.map(question => {
                return <Card key={question.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={question.id}>
                            {question.question}
                        </Accordion.Toggle>
                        <AccordionCollapse eventKey={question.id}>
                            <Card.Body>
                                <ListGroup>
                                    {Object.entries(question.possibleAnswers).map(keyValue => {
                                        return <ListGroupItem>
                                            {keyValue[0]}:  {keyValue[1]}
                                        </ListGroupItem>
                                    })}
                                </ListGroup>
                            </Card.Body>
                        </AccordionCollapse>
                </Card>
            })}
        </Accordion>
    )
};

export default QuestionList;