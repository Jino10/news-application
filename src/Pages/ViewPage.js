import Headerbar from './../Components/Headerbar';
import './../Styles/view.css';
import React,{  useEffect, useState } from 'react';
import {useSelector} from 'react-redux'

function ViewPage(){
              
      const[data,setData]=useState([]);

      const url_data = useSelector(state=>state.user.current_news_obj)
      useEffect(()=>{
         fetch(`https://api.allorigins.win/get?url=${url_data.url}`).
         then((res)=>res.json()).
         then((response)=>{
          console.log(response);
          // setData(response.articles);
         })
        },[url_data])
      // useEffect(()=>{
      //   handleLoginAxios();
      // })

      // const handleLoginAxios = async () =>{
      //   await fetch(`https://api.allorigins.win/get?url=https://www.thehindu.com/news/national/feeder/default.rss`).
      //   then((res)=>res.json()).
      //   then((response)=>{
      //     console.log(response.contents);
      //   }) 
      // }

      
    return(
        <div className='main-box'>
            <Headerbar/>   
            {/* {JSON.stringify(url_data.url)} */}
             <div className='view-all'>
               <div className='row card-prop'>
                {
                  data.map((v,k)=>
                  <div className='col-3'>
                  <div class="card" style={{width: '18rem',height:'35rem',marginBottom:'15px'}}>
                    <img class="card-img-top" src={v.urlToImage} alt="Card image cap"/>
                  <div class="card-body">
                  <h5 class="card-title">{v.title}</h5>
                  <p class="card-text">{v.description}</p>
              </div>
             </div>
            </div>
                )}
         </div>
        </div>
      </div>
    );
}
export default ViewPage;