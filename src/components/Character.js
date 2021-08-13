// Write your Character component here
import React from 'react';


const Character = props => {
    return (
        <div>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.url)}>
                See Details
            </button>
        </div>
    )
}

export default Character;