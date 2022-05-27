// // validar campos vacíos
// export const emptyValidator = (inputData) => {
//     const { value } = inputData;
//     if(value !== '') {
//         return true;
//     } else {
//         return false;
//     }
// }

export const emailValidator = (inputData) => {
    const { value } = inputData;
    // eslint-disable-next-line no-useless-escape
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const resultValidation = emailValid.test(value);
    if (resultValidation) {
        return true;
    } else {
        return false;
    }
}

// export const minLengthValidator = (inputData, minLength) => {
//     const { value } = inputData;
//     //FALTA!!: Removedor de clase éxito error (clases css)
//     if (value.length >= minLength) {
//         return true;
//     } else {
//         return false;
//     }
// }

// export const anotherFieldValidation = (inputData) => {
//     const { value } = inputData;
//     removeClassErrorSuccess(inputData);
//     console.log('valores desde anotherFieldValidation', value);
//     if(value !== '') {
//         inputData.classList.add('success');
//         return true;
//     } else {
//         inputData.classList.add('error');
//         return false;
//     }
// }



// const removeClassErrorSuccess = (inputData) => {
//     inputData.classList.remove('success');
//     inputData.classList.remove('error');
// }
