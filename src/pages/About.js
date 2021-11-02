import React from 'react';

import '../pages/CSS/about.css'
import image1 from '../../src/assests/images/images.jpg';
 
import image3 from '../../src/assests/images/thanneerchal-park.jpg';
const About = () => {
    
    return (
<div class="about-wrapper mt-120">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-12">
                <div class="about-wrapper-left">
                    <div class="about-img">

                        <img  src={image3} alt="" class="img-fluid"/>

                    </div>
                        <div class="about-video">
                            <img style={{'marginBottom':'10px'}} src={image1} alt="" class="img-fluid"/>
                                <i class="flaticon-play-button-arrowhead"></i>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-5 col-md-12">
                        <div class="about-wrapper-right section-head head-left">
                            <h5>About TourX</h5>
                            <h2>Heritage park was inaugurated on 3rd October – 2003. Nandan Park is now country’s largest and only family entertainment center, which is at tracting largest crowd every day.</h2>
                            <ul class="about-list">
                                <li>
                                    <i class="flaticon-double-checking">
                                        </i> Donec viverra orci On a</li>
                                        <li>
                                            <i class="flaticon-double-checking"> 
                                            </i> Donec viverra orci On a</li>
                                                <li>
                                                    <i class="flaticon-double-checking">
                                                        </i> Donec viverra orci On a</li>
                                                        <li>
                                                            <i class="flaticon-double-checking"></i> Donec viverra orci On a</li>
                                                            <li><i class="flaticon-double-checking"></i> Donec viverra orci On a</li>
                                                            <li><i class="flaticon-double-checking"></i> Donec viverra orci On a</li>
                                                            </ul>
                                                            <div class="about-wrapper-btn"><a class="btn-common" href="/about-us">Read More</a>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
    );
};

export default About;