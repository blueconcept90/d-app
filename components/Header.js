import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import * as H from '../css/headerstyle'

const top = {
    closed: {
      rotate: 0,
      translateY: 0,
      translateX: 0
    },
    opened: {
      rotate: -40,
      translateY: 13,
      translateX: 2
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
      translateX: 0
    },
    opened: {
      rotate: 40,
      translateY: -17,
      translateX: 2
    }
  };

 
const Header = ({noburguer}) => {


    const [toggle, setToggle] = useState(false);

    

    return (
        <>
            <H.Navbar>
                {noburguer ? (
                    <></>
                ) : (<H.MenuBars onClick={()=> setToggle(!toggle)}>
                <H.BarMotionWrapp animate={toggle ? "opened" : "closed"} variants={top}><H.BarTop></H.BarTop></H.BarMotionWrapp>
                <H.BarMotionWrapp animate={toggle ? "opened" : "closed"} variants={center}><H.BarCenter width={toggle ? '27px' : '20px'}></H.BarCenter></H.BarMotionWrapp>
                <H.BarMotionWrapp animate={toggle ? "opened" : "closed"} variants={bottom}><H.BarBottom width={toggle ? '27px' : '15px'}></H.BarBottom></H.BarMotionWrapp>
            </H.MenuBars>)}
                <H.LogoWrapper>
                    DinerApp
                </H.LogoWrapper>
                <H.MenuNavbar isintro={noburguer}>
                    <H.Atag> Contacto</H.Atag>
                    <H.Atag> Restaurantes</H.Atag>
                    <H.Atag> Bares</H.Atag>
                </H.MenuNavbar>
            </H.Navbar>
        </>
     );
}
 
export default Header;