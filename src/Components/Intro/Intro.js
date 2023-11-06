import React from 'react'
import './Intro.css'
import bg from '../../Assets/GW.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>hello,</span>
        <span className='introText'>I'm
          <span className='introName'>
            Sergio
          </span> <br />
          <Typewriter words={[' Student ', ' Web Designer ']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>

        <p className='introPara'>I am a student studying at BAGIMU NEGERIKU. <br />
          I am interested in programming and am <br />
          improving my skills by working on several projects</p>
      </div>
      <img src={bg} alt='' className='bg' />
    </section>
  )
}

export default Intro

