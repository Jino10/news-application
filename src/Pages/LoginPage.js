import React,{ useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { emailValidation,passValidation } from '../Validation/loginValidation';
import './../Styles/login.css';
import {useDispatch} from 'react-redux';
import { loginAction } from '../Redux/userSlice';

function LoginPage(){
   
              const[userInput,setUserInput]=useState({
                                 request:"stefhi_login",
                                 email:"",
                                 password:""
              });

                let dispatch=useDispatch();
                let navigate=useNavigate();

                useEffect(()=>{
                  if(localStorage.getItem('id')){
                     navigate('/home')
                  }
                },[])

              const[errmsg,setErrMsg]=useState('');
 
              const handleInput=(e,key)=>{
                setUserInput({...userInput,[key]:e.target.value});
              }


              const login=async()=>{
               if(!emailValidation(userInput.email)){
                  return setErrMsg("Please enter a user-id");
              }
              if(!passValidation(userInput.password)){
                  return setErrMsg("Please enter valid password");
              }
              if(userInput.email == "" || userInput.password == ""){
                  return setErrMsg("Invalid email and password");
              }
               let status=await dispatch(loginAction(userInput));
               if(status){
                  navigate("/home");
               }
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
                     <input type="password" id="pswd" className="form-control" onChange={(e)=>handleInput(e,'password')}/>
                  </div>
                  {errmsg.length>0 &&(<div style={{marginTop:"20", color:"red"}}>{errmsg}</div>)}
                  <div>
                     <button type="button" className="btn btn-dark logbutton" onClick={login}>LOGIN</button>
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