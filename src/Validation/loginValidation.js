export const emailValidation=(email)=>{
    let emailRegex=/^\S+@\S+\.\S+$/;
    return emailRegex.test(email);

}
export const passValidation=(password)=>{
    let passRegex=/^(?=.*@\S)(?=.*[a-z]).{5,20}$/;
    return passRegex.test(password);

}