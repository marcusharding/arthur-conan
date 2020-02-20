import React from 'react';

const sidedrawerButton = props => (
    <button className='sidedrawer_button' onClick={props.click}>
        <div className='sidebutton__line_1'/>
        <div className='sidebutton__line_2'/>
        <div className='sidebutton__line_3'/>
    </button>
);

export default sidedrawerButton;