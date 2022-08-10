
import { Link } from "react-router-dom";
import './../Styles/home.css';
function HomePage(){

       return(
        <div className="homepage">
            <h1 className="welcome">WELCOME USER...</h1>
            <div className="wrapper-box">
                <Link to="/view"><div className="first-box"></div></Link>
                 <Link to="/view"><div className="second-box"></div></Link>
                <Link to="/view"><div className="third-box"></div></Link>
                <Link to="/view"><div className="fourth-box"></div></Link>
                <Link to="/view"><div className="fifth-box"></div></Link> 
            </div>
            <marquee className="clickview">
             If you want to choose a preferred news portal by simple click on it...!
            </marquee>
        </div>
       );
}
export default HomePage;