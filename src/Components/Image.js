import React from 'react';

const Image = (props) => {
    /**
     * Returns an image
     */
    return (  
        <li>
            <img
            src={props.url}
            alt={props.title}
            />
        </li>
    );
}
 
export default Image;