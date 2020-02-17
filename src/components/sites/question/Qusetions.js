import React, {useEffect} from "react";
import QuestionList from "./QuestionList";
import messages from "../../../../resources/localized_messages";
import Error from "../errors/Error";
import Spinner from "../../utils/Spinner";
import FiltersPanel from "../../utils/FiltersPanel";
import QuestionFilters from "../../../containers/questions/QuestionFilters";


const  Questions  = ({ fetchQuestions, questions }) => {

    useEffect(() => {
       fetchQuestions();
    },[]);

    const getContent = () => {
        if(questions.isFetching) {
            return (
                <Spinner/>
            )
        }
        if(questions.error) {
            return (
                <Error message={messages.fetchingError}/>
            )
        }
        return <QuestionList questions={questions.questions}/>
    };

    return (
        <>
           <FiltersPanel panelName='Filtry'>
               <QuestionFilters/>
           </FiltersPanel>
            {getContent()}
        </>
    )
};

export default Questions;