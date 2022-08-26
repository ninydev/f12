import React, { Component } from "react";
import Slider from "react-slick";
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'

export default class SlickSliderClass extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                </Slider>
            </div>
        );
    }
}