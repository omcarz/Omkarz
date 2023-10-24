import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import User from "../images/user.svg";

import "../styles/review.css";

function Review() {
    return (
        <React.Fragment>
            <div className="rvw-main-div">

                <div className="rvw-head">
                    <p>Happy Customers</p>
                    <hr className="rvw-hr" />
                </div>

                <div className="rvw-carousel-div">
                    <div className="container">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper_container"
                        >
                            <SwiperSlide>
                                <div className="rvw-card">

                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>Meet Harsoda</p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            I've been using this cab service for a while now, and I'm always impressed with their punctuality and professionalism. The drivers are courteous, and the vehicles are clean and well-maintained
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>
                                            Aditya Sharma
                                        </p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            I had an urgent business meeting and needed a cab at the last minute. This service came through for me, and the driver got me to my destination on time. I couldn't be happier                                            </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>
                                            Anmol Kumar
                                        </p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            I appreciate the convenience and ease of booking a cab through their app. It's user-friendly and makes my daily commute a breeze. Keep up the great work!                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>
                                            Akash Yadav
                                        </p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            The cab service's customer support is exceptional. They are quick to respond and resolve any issues. It's a relief knowing they have your back, even during unexpected situations                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>
                                            Padam Mantry
                                        </p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            I've tried many cab services in the past, but this one stands out for its transparent pricing. No hidden fees or surprises in the fare. It's a trusty option for budget-conscious travelers                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>
                                            Kundarp Vaidya
                                        </p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            I love the variety of vehicle options they offer. Whether I need a regular cab, a spacious SUV, or a luxury ride, they have me covered. It's all about choice and comfort                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="rvw-card">
                                    <div className='rvw-card-top'>
                                        <img className='rvw-card-user-img' src={User} alt='user-img' />
                                        <p className='rvw-card-top-txt'>
                                            Harsh Yadav
                                        </p>
                                    </div>

                                    <div className='rvw-card-text'>
                                        <p>
                                            "I've been using this cab service for a while now, and I'm always impressed with their punctuality and professionalism. The drivers are courteous, and the vehicles are clean and well-maintained."
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>


                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow">
                                    <i class="fa-solid fa-arrow-left fa-2xl" style={{ "color": "#000000" }}></i>
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <i class="fa-solid fa-arrow-right fa-2xl" style={{ "color": "#000000" }}></i>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </Swiper>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Review