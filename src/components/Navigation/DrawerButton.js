import React from 'react';

const drawerButton = props => (
    <button className='drawer_button' onClick={props.click}>
        <div className='button__line_1'/>
        <div className='button__line_2'/>
        <div className='button__line_3'/>
    </button>
);

export default drawerButton;