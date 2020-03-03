import React, {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const CustomMultipleSelect = ({sourceElements, onClick, keyName, checkedName, labelName, prompt}) => {

    const openPanel = {
        arrowClass: 'fas fa-caret-up fa-xs',
        contentPanelClass: 'multiselect-content-panel show-panel'
    };
    const closePanel = {
        arrowClass: 'fas fa-caret-down fa-xs',
        contentPanelClass: 'multiselect-content-panel'
    };
    const getPrompt = () => {
        if (typeof prompt === "function") {
            return prompt();
        }
        return 'wybierz...';
    };

    const [selectState, setSelectState] = useState({
        open: false,
        panel: closePanel,
        prompt: getPrompt()
    });

    const onFormControlClick = () => {
        setSelectState({
            ...selectState,
            open: !selectState.open,
            panel: selectState.open ? closePanel : openPanel
        });
    };

    return (
        <div>
            <div className={'multiselect-toggle-panel'} onClick={onFormControlClick}>
                <div className='arrow'><i className={selectState.panel.arrowClass}/></div>
                <span>{selectState.prompt}</span>
            </div>
            <div className={selectState.panel.contentPanelClass}>
                <div className='options-container'>
                    {sourceElements.map(element => {
                        return <div key={element[keyName]} className='option'>
                            <Form.Check type="switch"
                                        id={element[keyName]}
                                        name={element[keyName]}
                                        checked={element[checkedName]}
                                        onChange={onClick(element[keyName])}
                                        label={element[labelName]}
                            />
                        </div>})}
                </div>
            </div>
        </div>
    )
};

export default CustomMultipleSelect;
