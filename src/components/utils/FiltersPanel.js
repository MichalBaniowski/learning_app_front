import React, {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";

const FiltersPanel = ({panelName, children}) => {
    const downArrowClass = 'fas fa-angle-down';
    const upArrowClass = 'fas fa-angle-up';

    useEffect(() => {
        console.log('filter panel');
    },[]);

    const [filterState, setFilterState] = useState({
        open: false,
        arrowClassName: downArrowClass,
    });

    const onFilterClick = () => {
        setFilterState({
            open: !filterState.open,
            arrowClassName: filterState.open ? downArrowClass : upArrowClass
        })
    };

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header}
                                  className={'filter-panel-header'}
                                  eventKey={'open'}
                                  onClick={onFilterClick}>
                    <i className={filterState.arrowClassName}/>
                    <span>{panelName}</span>
                </Accordion.Toggle>
                <AccordionCollapse eventKey={'open'}>
                    <Card.Body>
                        {children}
                    </Card.Body>
                </AccordionCollapse>
            </Card>
        </Accordion>
    );
};

export default FiltersPanel;