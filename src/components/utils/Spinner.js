import Spinner from "react-bootstrap/Spinner";
import React from "react";


export default () => {
    return(
        <Spinner animation="border" role="status" size='md' className='loading'>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}