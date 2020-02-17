import React, {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const CustomMultipleSelect = ({sourceElements, onClick, keyName, checkedName, labelName, prompt}) => {

    const downArrowClass = 'fas fa-caret-down fa-xs';
    const upArrowClass = 'fas fa-caret-up fa-xs';

    useEffect(()=> {
        console.log('custom multi select');
    },[]);
    const getPrompt = () => {
        if(typeof prompt === "function") {
            return prompt();
        }
        return 'wybierz...';
    };

    const [selectState, setSelectState] = useState({
        open: false,
        arrowClassName: downArrowClass,
        prompt: getPrompt()
    });

    const onFormControlClick = () => {
        console.log('multiselect');
        setSelectState({
            ...selectState,
            open: !selectState.open,
            arrowClassName: selectState.open ? downArrowClass : upArrowClass
        });
    };

    return (
        <Accordion>
            <Accordion.Toggle className='test'
                              eventKey='toggle'
                              onClick={onFormControlClick}>
                <div className='arrow'><i className={selectState.arrowClassName}/></div>
                <span>{selectState.prompt}</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='toggle'>
                <div className='options-container'>
                    {sourceElements.map(element => {
                        return <div key={element[keyName]} className='option'>
                            <Form.Check
                                type="switch"
                                id={element[keyName]}
                                name={element[keyName]}
                                checked={element[checkedName]}
                                onChange={onClick}
                                label={element[labelName]}
                            />
                        </div>
                    })}
                </div>
            </Accordion.Collapse>
        </Accordion>
    )
};

export default CustomMultipleSelect;

