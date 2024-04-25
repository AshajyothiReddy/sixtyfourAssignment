import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './image 1.jpeg';
import image2 from './image 2.jpg';
import image3 from './image 3.webp';
import image4 from './image 4.jpg';
import './ReactSlick.css'

const ReactSlick = props => {
    const {noOfSlidesToShow} = props
    const settingsLg = {
        dots: true,
        slidesToShow: noOfSlidesToShow,
        slidesToScroll: 1,
      }

     return (
        <Slider {...settingsLg}>
              <div className='carousel-card'>
                <img src={image1} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">State of Markets</h3>
                <p className='carousel-desc'>The market Captilization of indian stocks crossed U$$4.5 trillion in january</p>
              </div>
              <div className='carousel-card'>
                <img src={image2} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">The central Capex Surge</h3>
                <p className='carousel-desc'>The last few years have seen a very substantial step up in capital</p>
              </div>
              <div className='carousel-card'>
              <img src={image3} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Direct Taxes and Business Cycle</h3>
              <p className='carousel-desc'>The share of Direct taxes in total tax collections of the central goverment is</p>
            </div>
            <div className='carousel-card'>
              <img src={image4} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Banking Monitor</h3>
              <p className='carousel-desc'>Credit Growth has remained broadly stable in recent weeks on</p>
            </div>
            <div className='carousel-card'>
                <img src={image1} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">State of Markets</h3>
                <p className='carousel-desc'>The market Captilization of indian stocks crossed U$$4.5 trillion in january</p>
              </div>
              <div className='carousel-card'>
                <img src={image2} alt="caurosel item" className='carousel-image' />
                <h3 className="carousel-heading">The central Capex Surge</h3>
                <p className='carousel-desc'>The last few years have seen a very substantial step up in capital</p>
              </div>
              <div className='carousel-card'>
              <img src={image3} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Direct Taxes and Business Cycle</h3>
              <p className='carousel-desc'>The share of Direct taxes in total tax collections of the central goverment is</p>
            </div>
            <div className='carousel-card'>
              <img src={image4} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Banking Monitor</h3>
              <p className='carousel-desc'>Credit Growth has remained broadly stable in recent weeks on</p>
            </div>
            <div className='carousel-card'>
              <img src={image4} alt="caurosel item" className='carousel-image' />
              <h3 className="carousel-heading">Banking Monitor</h3>
              <p className='carousel-desc'>Credit Growth has remained broadly stable in recent weeks on</p>
            </div>
          </Slider>
     ) 
}

export default ReactSlick
