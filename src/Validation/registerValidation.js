// export const nameValidation=(name)=>{
//     let nameRegex=/^[a-zA-Z]+$/;
// }

export const mailValidation=(email)=>{
    let emailRegex=/^\S+@\S+\.\S+$/;
    return emailRegex.test(email);

}

export const passwdValidation=(password)=>{
    let passRegex=/^(?=.*@\S)(?=.*[a-z])(?=.*[0-9]).{5,20}$/;
    return passRegex.test(password);

}