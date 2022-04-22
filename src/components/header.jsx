import React from 'react';
import HeaderMenu from './ui/headerMenu';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img1 from '../assets/backgroundImage3.jpg';
import img2 from '../assets/backgroundImage5.jpg';
import img3 from '../assets/backgroundImage1.jpg';


const Header = () => {

    return (
        <div className='row'>
            <HeaderMenu />
            <div className="header__wrapper">
                <div className="header__big--img">
                </div>
                <div className="row__slider">
                    <Splide className="header__slider"
                        options={{
                            arrows: false,
                            autoplay: true,
                            type: 'loop',
                            perPage: 1,
                            interval: 1800,
                            pagination: true

                        }}>
                        <SplideSlide className="header__slider--para" >
                            <img className='sliderImg' src={img3} alt="" />
                        </SplideSlide>
                        <SplideSlide className="header__slider--para">
                            <img className='sliderImg' src={img1} alt="" />
                        </SplideSlide>
                        <SplideSlide className="header__slider--para">
                            <img className='sliderImg' src={img2} alt="" />
                        </SplideSlide>
                    </Splide>
                </div>
                <div className="header__blocks">
                    <div className="header__block">
                    </div>
                    <div className="header__block">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
