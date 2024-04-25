import React, {useState} from 'react';
import ReactSlick from './ReactSlick';
import {Chrono} from 'react-chrono';
import Navbar from './Sidebar';
import NavbarSm from './NavbarMobile';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaRegCalendar, FaRegClock, FaBell } from "react-icons/fa";
import image1 from './image 1.jpeg';
import image2 from './image 2.jpg';
import image3 from './image 3.webp';
import image4 from './image 4.jpg';
import './App.css';

function App() {
  const [viewMoreCards, setViewMoreCards] = useState(false);
  
  const onClickViewMore = () => {
    setViewMoreCards(!viewMoreCards);
  }

  return (
    <div className="App">
        <div className="lg-m-devices-navnar">
          <Navbar/>
        </div>
        <div className='sm-devices-navbar'>
          <NavbarSm/>
        </div>
        <div className="main-page">
          <div className='header-part'>
          <div className='name-time-container'>  
          <h1 className='name'>Good Afternoon, Akshay</h1>
          <div className='cal-clock-list'>
            <div className='cal-clock-list-item'>
              <FaRegCalendar className="cal-clock-icon" />
              <p>Today, 14 February</p>
            </div>
            <div className='cal-clock-list-item'>
              <FaRegClock className="cal-clock-icon"/>
              <p>16:42</p>
            </div>
            <FaBell className='cal-clock-icon'/>
          </div>
          </div>
          <p className='desc'>You are subscribed to Diwali plan.</p>
          <div className='header-part-sm'>
            <div>
              <h1 className='name-sm'>Good Afternoon, Akshay</h1>
              <p className='desc-sm'>You are subscribed to Diwali plan.</p>
            </div>
            <div className='cal-clock-list'>
            <div className='cal-clock-list-item'>
              <FaRegCalendar className="cal-clock-icon" />
              <p>Today, 14 February</p>
            </div>
            <div className='cal-clock-list-item'>
              <FaRegClock className="cal-clock-icon"/>
              <p>16:42</p>
            </div>
            <FaBell className='cal-clock-icon'/>
          </div>
          </div>  
          <ul className='cards-list'>
            <li className='card'>
              <MdOutlineLibraryBooks className="library-icon-1 library-icon-sm library-icon-md" />
              <h1 className='card-heading'>My Saved Library 1</h1>
              <p className='card-desc'>dd-mm-yyyy</p>
            </li>
            <li className='card'>
            <MdOutlineLibraryBooks className="library-icon-2 library-icon-sm library-icon-md" />
              <h1 className='card-heading'>My Saved Library 2</h1>
              <p className='card-desc'>dd-mm-yyyy</p>
            </li>
            <li className='card'>
            <MdOutlineLibraryBooks className="library-icon-3 library-icon-sm library-icon-md" />
              <h1 className='card-heading'>My Saved Library 3</h1>
              <p className='card-desc'>dd-mm-yyyy</p>
            </li>
            <li className='card'>
            <MdOutlineLibraryBooks className="library-icon-4 library-icon-sm library-icon-md" />
              <h1 className='card-heading'>My Saved Library 4</h1>
              <p className='card-desc'>dd-mm-yyyy</p>
            </li>
            <li className='card'>
            <MdOutlineLibraryBooks className="library-icon-5 library-icon-sm library-icon-md" />
              <h1 className='card-heading'>My Saved Library 5</h1>
              <p className='card-desc'>dd-mm-yyyy</p>
            </li>
          </ul>
          </div>
          <div className='main-page-carousel-releases'>
          <div className='carousel-part'>
            <div className="lg-carousel">
            <ReactSlick noOfSlidesToShow={4} />
            </div>
            <div className="md-carousel">
            <ReactSlick noOfSlidesToShow={3} />
            </div>
            <div className='sm-carousel'>
            <ReactSlick noOfSlidesToShow={1} />
            </div>
          <button className="view-more-btn" onClick={onClickViewMore}>View More</button>
          </div>
          <div className='recent-releases-part'>
            <div className="drop-down-container">
              <h2 className='recent-releases'>Recent Releases</h2>
              <select name="countries" id="countries" className='countries'>
                <option value="india">India</option>
                <option value="china">China</option>
                <option value="japan">Japan</option>
                <option value="uk">UK</option>
              </select>
            </div>
            <hr style={{color:'gray', width:'100%'}} />
            <div className="chrono-container">
              <Chrono mode="VERTICAL" cardHeight='80' borderLessCards='false' highlightCardsOnHover='true'>
                <div>
                  <p className='chrono-date'>Feb 12, 2024</p>
                  <h3 className='chrono-heading'>CFI Inflation</h3>
                  <p className='chrono-desc'>the inflation ramian stable in the last week</p>
                </div>
              </Chrono>
            </div>
            <div className="chrono-container-sm">
              <Chrono mode="VERTICAL" cardHeight='60' cardWidth='80%' borderLessCards='false' highlightCardsOnHover='true'>
                <div>
                  <p className='chrono-date-sm'>Feb 12, 2024</p>
                  <h3 className='chrono-heading-sm'>CFI Inflation</h3>
                  <p className='chrono-desc-sm'>the inflation ramian stable in the last week</p>
                </div>
              </Chrono>
            </div>
          </div>
          </div>
          { viewMoreCards ? (
          <div id="view-more-section" className='view-more-cards'>
          <div className='view-more-card'>
                <img src={image1} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">State of Markets</h3>
                <p className='carousel-desc'>The market Captilization of indian stocks crossed U$$4.5 trillion in january</p>
              </div>
              <div className='view-more-card'>
                <img src={image2} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">The central Capex Surge</h3>
                <p className='carousel-desc'>The last few years have seen a very substantial step up in capital</p>
              </div>
              <div className='view-more-card'>
              <img src={image3} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Direct Taxes and Business Cycle</h3>
              <p className='carousel-desc'>The share of Direct taxes in total tax collections of the central goverment is</p>
            </div>
            <div className='view-more-card'>
              <img src={image4} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Banking Monitor</h3>
              <p className='carousel-desc'>Credit Growth has remained broadly stable in recent weeks on</p>
            </div>
            <div className='view-more-card'>
                <img src={image1} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">State of Markets</h3>
                <p className='carousel-desc'>The market Captilization of indian stocks crossed U$$4.5 trillion in january</p>
              </div>
              <div className='view-more-card'>
                <img src={image2} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">The central Capex Surge</h3>
                <p className='carousel-desc'>The last few years have seen a very substantial step up in capital</p>
              </div>
              <div className='view-more-card'>
              <img src={image3} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Direct Taxes and Business Cycle</h3>
              <p className='carousel-desc'>The share of Direct taxes in total tax collections of the central goverment is</p>
            </div>
            <div className='view-more-card'>
              <img src={image4} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Banking Monitor</h3>
              <p className='carousel-desc'>Credit Growth has remained broadly stable in recent weeks on</p>
            </div>
            <div className='view-more-card'>
              <img src={image4} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Banking Monitor</h3>
              <p className='carousel-desc'>Credit Growth has remained broadly stable in recent weeks on</p>
            </div>
          </div>
          ) : ''}
        </div>
    </div>
  );
}

export default App;
