import React from 'react';

const Disk = (props)=>{
    return (
        <div onClick={props.handleClick} className={`disk ${props.className}`} >
            {props.val}
        </div>
    )
}

export default Disk;

