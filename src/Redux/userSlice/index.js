import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
    userDetails:{
        id:null,
        name:null,
        email:null,
        token:null
    },
    current_news_obj : {
        name : null,
        url:null
    }
}

export const userSlice=createSlice({
        name:'user',
        initialState,
        reducers:{
            setUserDetails:(state,action)=>{
                state.userDetails=action.payload;
            },
            setURLDetails:(state,action)=>{
                state.current_news_obj=action.payload;
            }
        }
})

export const loginAction=(userInput)=>async(dispatch)=>{

    let {data}=await axios.post("https://karka.academy/api/",JSON.stringify(userInput));
    console.log(data);
    let response=data.data;
    localStorage.setItem('id',response.id);
    localStorage.setItem('name',response.name);
    localStorage.setItem('email',response.email);
    localStorage.setItem('token',response.token);
    dispatch(setUserDetails({
            id:response.id,
            name:response.name,
            email:response.email,
            token:response.token
    }))
    if(response.id){
        return true;
    }
    else{
        return false;
    }
  } 

  export const getUserDetails=async(dispatch)=>{
    
 dispatch(setUserDetails({
      id:localStorage.getItem('id'),
      name:localStorage.getItem('name'),
      email:localStorage.getItem('email'),
      token:localStorage.getItem('token')
 }))
}

export const setDefault=async(dispatch)=>{
    dispatch(setUserDetails({
        id:null,
        name:null,
        email:null,
        token:null
    }))
}


export const {setUserDetails,setURLDetails}=userSlice.actions;
export default userSlice.reducer;
