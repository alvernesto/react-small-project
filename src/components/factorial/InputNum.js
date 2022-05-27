import React from 'react'

const InputNum = (props) => {
    const { getNumber } = props;
   
    const onBlur = (e) => {
        e.preventDefault();
        console.log('event from input', e.target.value);
        getNumber(e.target.value);
    }

    return (
        <>
            <input onBlur={onBlur} type="text" placeholder="Ingresa valor entre 1 - 20 | type value between 1-20" />
        </>
    )
}

export default InputNum;
