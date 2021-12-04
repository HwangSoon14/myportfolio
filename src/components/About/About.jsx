import React, { useState } from 'react';
import {  Route , Link , Routes } from 'react-router-dom';
import Me from '../../img/me.jpg';
import './About.scss';
import TabDesc from './components/TabDesc/TabDesc';
const About = () => {
    
    const [value , setValue] = useState(1);

    const [active , setActive] = useState(true);

    const handleClick = (value , active) => {
        setValue(value);
        setActive(!active);
    }

    return (
    <>
        <div className="a">
            <div className="a-text">
                    <h1>About Me</h1> 
                <div className="a-border a-top"></div>
                <div className="a-border a-left"></div>
                <div className="a-border a-right"></div>
                <div className="a-border a-bottom-left"></div>
                <div className="a-border a-bottom-right"></div>
            </div>
            <div className="a-wrapper">
                <div className="a-wrapper-left">
                    <div className="a-coverImg">
                        <div className="a-bg"></div>
                        <img src={Me} alt="me" />
                    </div>
                </div>
                <div className="a-wrapper-right">
                    <div className="a-intro">
                        <div className="a-tablist">
                            <span
                                onClick={() => handleClick(1 , false)}
                                className={active ? "a-tab active" : "a-tab"}>My Education</span>                            
                            <span 
                                onClick={() => handleClick(2 , true)}
                                className={!active ? "a-tab active" : "a-tab"}>My Experience</span> 
                        </div>
                    </div>
                     {(value === 1)
                         ?
                            <TabDesc  desc="education"/>
                         : 
                            <TabDesc  desc="experience"/>
                         } 
                </div>
            </div>
        <div className="a-clip"></div>
        </div>
    </>
    );
};

export default About;