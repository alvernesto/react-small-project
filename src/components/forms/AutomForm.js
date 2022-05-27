import React, { useState } from 'react';
import AutomInput from './AutomInput';

const AutomForm = () => {

    const [input, setInput] = useState({
        yourName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const changeForm = (e) => {
        console.log('e.target.value AutomInput.js --> AutomForm.js : ', e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <form onChange={changeForm}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1>Your fav Form</h1>
                </div>
                <div>
                    <AutomInput input={input} />
                </div>
                <div>
                    <button id="botton" type="submit" className='btn btn-dark btn-lg my-1'>
                        send
                    </button>
                </div>
            </form>

        </>
    )
}

export default AutomForm