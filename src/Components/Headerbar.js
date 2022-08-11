import './../Styles/headerbar.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setDefault} from './../Redux/userSlice';


function Headerbar(){

    const navigate = useNavigate()
    let dispatch=useDispatch();
    let url_heading=useSelector((state)=>state.user);

    const show=async()=>{
      let status=await dispatch(setDefault);
      localStorage.clear();
      navigate('/')
    }

    return(
        <div className='header-box'>
        <nav class="navbar navbar-expand-lg content-box">
          <div class="container-fluid">
          <div className='news'><h4>{url_heading. current_news_obj.name}</h4></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic" className='category'>
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >General</Dropdown.Item>
        <Dropdown.Item >Business</Dropdown.Item>
        <Dropdown.Item >Technology</Dropdown.Item>
        <Dropdown.Item >Entertainment</Dropdown.Item>
        <Dropdown.Item >Health</Dropdown.Item>
        <Dropdown.Item >Science</Dropdown.Item>
        <Dropdown.Item >Sports</Dropdown.Item>
      </Dropdown.Menu>

      </Dropdown>
        </li>

        <li class="nav-item dropdown">
        <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" className='news-list'>
        Change news portal
       </Dropdown.Toggle>

        <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Times of India</Dropdown.Item>
        <Dropdown.Item href="#/action-2">The Hindu</Dropdown.Item>
        <Dropdown.Item href="#/action-3">The Indian Express</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Oneindia</Dropdown.Item>
       <Dropdown.Item href="#/action-1">Hindustan times</Dropdown.Item>
      </Dropdown.Menu>
      
      </Dropdown>
        </li>
      </ul>
      <form className='date-form'>
        <label for="day" className='form-label date-label'>Pick the date</label>
        <input type="date" id="day" className='form-control date-input'/>
      </form>
     <button type="button" className='btn btn-outline-light' onClick={show}>Logout</button>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Headerbar;