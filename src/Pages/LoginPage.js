import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { emailValidation,passValidation } from '../Validation/loginValidation';
import './../Styles/login.css';
import UserContext from './UserContext';

function LoginPage(){
   
              const[userInput,setUserInput]=useState({
                                 email:"",
                                 passwd:""
              });

                    let navigate=useNavigate();
                    let test=useContext(UserContext);

              const[errmsg,setErrMsg]=useState('');
 
              const handleInput=(e,key)=>{
                setUserInput({...userInput,[key]:e.target.value});
              }

              const submitForm=async()=>{

                if(!emailValidation(userInput.email)){
                    return setErrMsg("Please enter a user-id");
                }
                if(!passValidation(userInput.passwd)){
                    return setErrMsg("Please enter valid password");
                if(userInput.email !== "jino.x@capestart.com" || userInput.passwd !== "pass@123"){
                    return setErrMsg("Invalid email and password");
                }
                }
                await fetch(`https://karka.academy/api/action.php?request=stefhi_login&email=${userInput.email}&password=${userInput.passwd}`).
                then((res)=>res.json()).
                then((response)=>{
                  console.log(response);
                  test.setValid(response);
                  if(response.status=="success"){
                     navigate("/home");
                  }
                })
                 localStorage.setItem("name",userInput.email);
                 localStorage.setItem("pass",userInput.passwd);
              }
              
    return(
            <div className='login'>
               <form className="loginform was-validated">
                   <h3 className='welcomehome'>WELCOME</h3>
                  <div className="form-group">
                     <label for="uname" className="form-label nameEntry">User-Id</label>
                     <input type="email" id="uname" className="form-control" onChange={(e)=>handleInput(e,'email')}/>
                  </div>
                  <div className="form-group">
                     <label for="pswd" className="form-label passwdEntry">Password</label>
                     <input type="password" id="pswd" className="form-control" onChange={(e)=>handleInput(e,'passwd')}/>
                  </div>
                  {errmsg.length>0 &&(<div style={{marginTop:"20", color:"red"}}>{errmsg}</div>)}
                  <div>
                     <button type="button" className="btn btn-dark logbutton" onClick={submitForm}>LOGIN</button>
                  </div>
                  <h6>OR</h6>
                  <div>
                     <Link to="/register" className='linkbutton text-dark'>Create new account?</Link>
                  </div>
                  {/* <b>{JSON.stringify(userInput)}</b> */}
               </form>
            </div>    
    );
}
export default LoginPage;