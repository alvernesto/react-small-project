import React from 'react';
import './inputClassErrorSuccess.css'; 

const AutomInput = (props) => {
    //const { changeForm } = props;
    const {input} = props; 
    
    let nameInput = ['yourName', 'email', 'password', 'repeatPassword'];
    
    // const onChange = (e) => {

    // }

    return (
        <>
            {nameInput.map(name => {
                return (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>
                            {name === 'yourName' ? 'Name' :
                                name === 'email' ? 'Email' :
                                    name === 'password' ? 'Password' :
                                        name === 'repeatPassword' ? 'Repeat password...' : null}
                        </label>
                        <input
                            id={name}
                            type={name === 'email' ? 'email' :
                                name === 'password' ? 'password' :
                                    name === 'repeatPassword' ? 'password' :
                                        'text'}
                            name={name}
                            value={input[name]}
                            className='error_class'
                           /> {/**value={input.yourName} onChange={inputValidation}  */ }
                    </div>
                )
            })}
        </>
    )
}

export default AutomInput;

//falta hacer operacion ternaria para definir type: text | 