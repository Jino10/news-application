import Headerbar from './../Components/Headerbar';
import './../Styles/view.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

function ViewPage() {

   let navigate=useNavigate();

   const [news, setNews] = useState([]);

   const url_data = useSelector(state => state.user.current_news_obj);

   useEffect(() => async () => {

      const res = await fetch(`https://api.allorigins.win/get?url=${url_data.url}`);
      let xml_json = await res.json();

      let json_data = await parseXml(xml_json.contents)
      console.log(json_data);
      let result = await json_data?.rss?.channel?.item;
      setNews(result);
      console.log(`updated news`, news);
   });

   useEffect(() => async () => {

      const res = await fetch(`https://api.allorigins.win/get?url=${url_data.url}`);
      let xml_json = await res.json();
      let json_data = await parseXml(xml_json.contents)
      // console.log(json_data);
      let result = await json_data.rss.channel.item;
      setNews(result);
      console.log(`updated news`, news);
   }, [url_data]);

      if(!url_data.url && localStorage.getItem('id') ){
           navigate("/");
      }

   // JSON to XML convert
   const parseXml = async (xml) => {
      var dom = null;
      if (window.DOMParser) {
         try {
            dom = (new DOMParser()).parseFromString(xml, "text/xml");
         }
         catch (e) { dom = null; }
      }
      else if (window.ActiveXObject) {
         try {
            dom = new window.ActiveXObject('Microsoft.XMLDOM');
            dom.async = false;
            if (!dom.loadXML(xml)) // parse error ..
               window.alert(dom.parseError.reason + dom.parseError.srcText);
         }
         catch (e) { dom = null; }
      }
      else
         alert("cannot parse xml string!");
      //return dom;
      let json = window.xml2json(dom);
      // json=JSON.parse(json.replace('#', ''));
      return JSON.parse(json.replace('undefined', ''));
   }

   return (
      <div className='main-box'>
         <Headerbar />
         <div className='view-all'>
            <div className='row card-prop'>
               {
                  news.map((v, k) =>
                     <div className='col-3 each-card'>
                        <div class="card" key={k} style={{ width: '18rem', height: '22rem', marginBottom: '15px' }}>
                           <img class="card-img-top" src={v.image} alt="image" />
                           <div class="card-body">
                              <h6 class="card-title head">{v.title['#cdata'] ? v.title['#cdata'] : v.title}</h6>
                              {/* <p class="card-text">{v.description.#cdata ? 1: v.description}</p> */}
                              <a href={v.link} target="_blank">
                                 <button type="button" className='btn btn-primary readbtn'>Read more...</button>
                              </a>
                              <p class="card-text para">{v.pubDate['#cdata'] ? v.pubDate['#cdata'] : v.pubDate}</p>
                           </div>
                        </div>
                     </div>)

               }

            </div>
         </div>
      </div>
   );
}
export default ViewPage;