import React, {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

const CustomMultipleSelect = ({sourceElements, onClick, keyName, checkedName, labelName}) => {

    const openPanel = {
        arrowClass: 'fas fa-caret-up fa-xs',
        contentPanelClass: 'multiselect-content-panel show-panel'
    };
    const closePanel = {
        arrowClass: 'fas fa-caret-down fa-xs',
        contentPanelClass: 'multiselect-content-panel'
    };
    const getPrompt = () => {
        const checkedElements = sourceElements.filter(el => el.checked);
        const checkedElementsCount = checkedElements.length;
        if(checkedElementsCount === 1) {
            return checkedElements[0][labelName];
        } else if(checkedElementsCount) {
            return 'wybrano '.concat(checkedElementsCount, ' z ', sourceElements.length, ' elementów');
        }
        return 'wybierz...';
    };

    const [selectState, setSelectState] = useState({
        open: false,
        panel: closePanel,
    });
    const [filter, setFilter] = useState({
        filter: '',
        prompt: getPrompt()
    });

    const getFilteredElements = () => {
        if(filter.filter) {
            return sourceElements.filter(element => {
                const label = element[labelName];
                if(typeof label === 'string') {
                    return label.toLowerCase().includes(filter.filter.toLowerCase());
                }
                return filter === label;
            })
        }
        return sourceElements;
    };

    const onFormControlClick = () => {
        setSelectState({
            ...selectState,
            open: !selectState.open,
            panel: selectState.open ? closePanel : openPanel
        });
    };

    const onChecked = (key) => async () => {
        await onClick(key);
        setFilter({
            ...filter,
            prompt: getPrompt()
        });
    };

    const onFilterChange = (e) => {
        const {value} = e.target;
        setFilter({
            ...filter,
            filter: value,
        });
    };

    return (
        <div>
            <div className={'multiselect-toggle-panel'} onClick={onFormControlClick}>
                <div className='arrow'><i className={selectState.panel.arrowClass}/></div>
                <span>{filter.prompt}</span>
            </div>
            <div className={selectState.panel.contentPanelClass}>
                <div className='multiselect-search-field'>
                    <input type="text"
                           name="filter"
                           className='multiselect-filter'
                           value={filter.filter}
                           onChange={onFilterChange}
                           placeholder="filtruj..." />
                </div>
                <div className='options-container'>
                    {getFilteredElements().map(element => {
                        return <div key={element[keyName]} className='option'>
                            <Form.Check type="switch"
                                        id={element[keyName]}
                                        name={element[keyName]}
                                        checked={element[checkedName]}
                                        onChange={onChecked(element[keyName])}
                                        label={element[labelName]}
                            />
                        </div>})}
                </div>
            </div>
        </div>
    )
};

export default CustomMultipleSelect;
