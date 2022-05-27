import React, { useState } from 'react';
//import { emptyValidator, emailValidator, minLengthValidator } from '../../utils/validationForm';

const Form = (props) => {
    //const { setAlert } = props;


    const [input, setInput] = useState({
        yourName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const changeForm = (e) => {
        console.log('e.target.value: ', e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }





    const inputValidation = e => {
        //const { type, name } = e.target;
        return null;
    }


    return (
        <form onChange={changeForm}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>Your fav Form</h1>
            </div>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}> {/** style={{display: 'flex', flexDirection:'column'}} */}
                    <label>
                        Name
                    </label>
                    <input id="yourName" type="text" name='yourName' value={input.yourName} onChange={inputValidation} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>
                        Email
                    </label>
                    <input id="email" type="email" name='email' value={input.email} onChange={inputValidation} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>
                        Password
                    </label>
                    <input id="password" type="password" name='password' value={input.password} onChange={inputValidation} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>
                        Repeat password...
                    </label>
                    <input id="repeatPassword" type="password" name='repeatPassword' value={input.repeatPassword} onChange={inputValidation} />
                </div>
            </div>
            <div>
                <button id="botton" type="submit" className='btn btn-dark btn-lg my-1'>
                    send
                </button>
            </div>
        </form>
    )
}

export default Form; 