import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../../Assets/Myositos12.png';
import { Link } from 'react-scroll';
import contactImg from '../../Assets/contact.png';
import Menu from '../../Assets/menu.png';

const Navbar = () => {
    const  [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='WebMenu' />
            <div className='desktopMenu'>
                <Link activeClass='Active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='Active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='Active' to='works' spy={true} smooth={true} offset={-10} duration={500} className='desktopMenuListItem'>Portfolio</Link>
            </div>
            <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-10} duration={500}>
                <button className='desktopMenuBTN'>
                    <img src={contactImg} alt='Contact' className='desktopMenuIMG' />Contact Me
                </button>
            </Link>


            <img src={Menu} alt='Menu' className='MobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='NavMenu' style={{display : showMenu? 'flex' : 'none'}}>
                <Link activeClass='Active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='Active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='Active' to='works' spy={true} smooth={true} offset={-10} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='Active' to='Contact' spy={true} smooth={true} offset={-9} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>

        </nav>
    )
}

export default Navbar;