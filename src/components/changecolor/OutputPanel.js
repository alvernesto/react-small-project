import React from 'react'; 
import './changeColor.css';

const OutputPanel = (props) => {
    const {index_btn} = props; 
    return (
        <div id="caja" className={`btn_${index_btn}`} style={{border: '1px solid black', width: '100%', height: '100%'}} />
    )
}

export default OutputPanel; 