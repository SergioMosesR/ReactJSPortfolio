import React from 'react';
import './Skill.css';
import UIDesign from '../../Assets/Figma.png';
import Laravel from '../../Assets/Laravel.png';
import ReactJS from '../../Assets/ReactJS.png';




const Skill = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>
            <span className='skillDesc'>I am a student and am interested in programming, currently I am studying at BAGIMU NEGERIKU School.
                Currently I am learning several things including Figma, Laravel and also React JS</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='Figma' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Figma</h2>
                        <p>I studied Figma to develop my skills in creating website designs and app designs.</p>
                    </div>
                </div>
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Laravel} alt='Laravel' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Laravel</h2>
                        <p>One of the things I am currently studying is Laravel, I am studying Laravel to develop my skills in creating a website.</p>
                    </div>
                </div>
            </div>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={ReactJS} alt='React JS' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>React JS</h2>
                        <p>I also studied React JS to develop my skills in creating a website.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill

