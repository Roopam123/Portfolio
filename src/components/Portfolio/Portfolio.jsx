import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import Protfolio1 from '../../img/portfolio.png'
import Profolio2 from '../../img/prot.png'
import News from '../../img/News.png'
import Ecommerse from '../../img/Ecommers.png'
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Protfolio1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Profolio2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={News} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerse} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
