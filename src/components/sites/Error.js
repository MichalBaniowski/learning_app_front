import React from "react";
import messages from "../../../resources/localized_messages";

const Error = ({message = messages.notFoundError}) => {
    return (
        <div className='info-box'>
            <h3><i className="fas fa-hand-middle-finger"/> {message}</h3>
        </div>
    )
};

export default Error;