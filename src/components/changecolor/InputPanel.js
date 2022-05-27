import React from 'react';
import './changeColor.css';

const InputPanel = (props) => {
    const { getOutColor } = props;
    let arr = [0, 1, 2, 3, 4, 5];

    const getBtn = (i) => {
        console.log('index: ', i);
        getOutColor(i); 
    }

    return (
        <>
            {arr.map(i => {
                return (
                    <button key={i} id={`btn-${i}`} className={`btn_${i}`} onClick={() => getBtn(i)} type="button">
                    </button>
                )
            })}
        </>
    )
}






export default InputPanel;


/**
 *  <button id="btn-1" className='btn_1' type="button">
            </button>
            <button id="btn-2" className='btn_2' type="button">
            </button>
            <button id="btn-3" className='btn_3' type="button">
            </button>
            <button id="btn-4" className='btn_4' type="button">
            </button>
            <button id="btn-5" className='btn_5' type="button">
            </button>
            <button id="btn-6"  className='btn_6' type="button">
            </button>
*/