import React from 'react';
import './About.css';
import image from './전설의 치즈케이크.jpg';

function About() {
    return (
        <div className='about__container'>
            <img src= {image} alt = '안지선 바스크 치즈케이크'/>
            <span>
                "자세히 보아야 <b>예쁘다.</b><br />
                오래 보아야 <b>사랑스럽다.</b><br />
                너도 그렇다.<br />
                마치 너의 '<b>바스크 치즈케이크</b>' 처럼.."
            </span>
            <span>- 정회인, 2023</span>
        </div>
    );
}

export default About;