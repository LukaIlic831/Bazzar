import React from 'react';
import add from '../assets/add1.jpg';
import add2 from '../assets/add2.jpg';
import add3 from '../assets/add3.jpg';
import add4 from '../assets/add4.jpg';
import add5 from '../assets/add5.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Adds = () => {
    return (
        <div className='row'>
                <Splide className="adds__wrapper"
                 options={ {
                    rewind: true,
                    autoplay: true,
                    type    : 'loop',
                    perPage : 1,
                    interval:2000,
                    pagination:false,
                    arrows:false,
                  } }>
                    <SplideSlide className="add">
                    <img src={add} alt="" />
                    </SplideSlide>
                    <SplideSlide className="add">
                    <img src={add2} alt="" />
                    </SplideSlide>
                    <SplideSlide className="add">
                    <img src={add3} alt="" />
                    </SplideSlide>
                    <SplideSlide className="add">
                    <img src={add4} alt="" />
                    </SplideSlide>
                    <SplideSlide className="add">
                    <img src={add5} alt="" />
                    </SplideSlide>
                </Splide>
        </div>
    );
}

export default Adds;
