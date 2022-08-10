import Headerbar from './../Components/Headerbar';
import './../Styles/view.css';
import React,{  useEffect, useState } from 'react';

function ViewPage(){
              
      const[data,setData]=useState([]);

      useEffect(()=>{
         fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=1b8b7add947147cca7d2670ca0edd721").
         then((res)=>res.json()).
         then((response)=>{
          console.log(response);
          setData(response.articles);
         })
        })
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