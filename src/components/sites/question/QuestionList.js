import React from "react";

const QuestionList = ({questions}) => {
    return(
        <ul>
            {questions.map(question => {
                return <li key={question.id}>{question.question}</li>
            })}
        </ul>
    )
};

export default QuestionList;