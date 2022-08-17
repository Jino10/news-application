
import { Link, useNavigate } from "react-router-dom";
import './../Styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { setURLDetails, getUserDetails } from '../Redux/userSlice';
function HomePage() {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.user);
    // console.log(data);
    const navigate = useNavigate()


    let getId = localStorage.getItem('id');
    // console.log(getId);

    if (!data.userDetails.id && getId) {
        return dispatch(getUserDetails);
    }
    if (!data.userDetails.id && !getId) {
        navigate('/')
    }


    const news_portal = [

        {
            name: "The Hindu",
            url: "https://www.thehindu.com/news/national/feeder/default.rss",
            class_name: "the-hindu"
        },
        {
            name: "Times of India",
            url: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",
            class_name: "times-of-india"
        },
        {
            name: "The Indian Express",
            url: "https://indianexpress.com/section/india/feed/",
            class_name: "the-indian-express"
        },
        {
            name: "Oneindia",
            url: "https://www.oneindia.com/rss/news-india-fb.xml",
            class_name: "one-india"
        },
        {
            name: "Hindustan times",
            url: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
            class_name: "hindustan-times"
        }
    ];

    // current date and time
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

    return (
        <div className="homepage">
            <h1 className="welcome">WELCOME {data.userDetails.name}...</h1>
            <p className="date">DATE :{date}</p>
            <p className="time">TIME :{time}</p>
            <div className="wrapper-box">
                {
                    news_portal.map((v, k) =>
                        <Link to="/view" key={k} onClick={() => dispatch((setURLDetails(v)))}><div className={v.class_name} ></div></Link>
                    )
                }
            </div>

            <marquee className="clickview">
                If you want to choose a preferred news portal by simple click on it...!
            </marquee>
        </div>
    );
}
export default HomePage;