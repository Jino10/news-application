import { useState } from "react";
import { nameValidation,mailValidation,passwdValidation } from "../Validation/registerValidation";
import './../Styles/register.css';

function RegisterPage(){
 
        const[getuser,setUser]=useState({
                  name:"",
                  email:"",
                  passwd:""
        });

        const[err,setErr]=useState('');

        const handleInput=(e,key)=>{
            setUser({...getuser,[key]:e.target.value});
          }

        const storeData=()=>{
         // if(!nameValidation(getuser.name)){
         //    return setErr("Please enter a name");
         // }
         if(!mailValidation(getuser.email)){
            return setErr("Please enter a valid email address");
         }
         if(!passwdValidation(getuser.passwd)){
            return setErr("Please enter a valid password");
         }
         fetch(`https://karka.academy/api/action.php?request=user_register&name=${getuser.name}&email=${getuser.email}&password=${getuser.passwd}`).
         then((res)=>res.json()).
         then((response)=>{
            console.log(response);
         })
        }  

        return(
            <div className="regform">
                <form className="registerform was-validated">
                      <h3>REGISTRATION FORM</h3>
                  <div className="form-group">
                     <label for="fname" className="form-label">Name</label>
                     <input type="text" id="fname" className="form-control" onChange={(e)=>handleInput(e,'name')}/>
                  </div>
                  <div className="form-group">
                     <label for="mail" className="form-label">E-Mail</label>
                     <input type="email" id="mail" className="form-control" onChange={(e)=>handleInput(e,'email')}/>
                  </div>
                  <div className="form-group">
                     <label for="pass" className="form-label">Password</label>
                     <input type="password" id="pass" className="form-control" onChange={(e)=>handleInput(e,'passwd')}/>
                  </div>
                  {err.length>0 &&(<div style={{marginTop:"20", color:"red",textAlign:"center"}}>{err}</div>)}
                  <div>
                     <button type="button" className="btn btn-light registerbutton" onClick={storeData}>REGISTER</button>
                  </div>
                  {/* <b>{JSON.stringify(getuser)}</b> */}
                </form>
            </div>
        );

}
export default RegisterPage;