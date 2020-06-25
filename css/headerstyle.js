import styled from 'styled-components'
import {motion} from 'framer-motion'


export const Navbar = styled.div`
width:100%;

height:10vh;
position:absolute;
  background:none;

top:0;
z-index:1200;
left:0;
padding:0% 6% 0% 6%;
display:grid;
grid-template-columns:30% 70%;
box-sizing:border-box;
align-items:center;

}
@media (max-width: 600px) {
  position:fixed;
  background:white;
  &::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 4px;
    background: linear-gradient(180deg,rgba(9,30,66,0.13) 0,rgba(9,30,66,0.13) 1px,rgba(9,30,66,0.08) 1px,rgba(9,30,66,0) 4px);
}
`;

export const LogoWrapper = styled.h3`
  font-family:'Karla', sans-serif;
  color :#333;
  margin:0;
`;

export const MenuNavbar = styled.div`
display:${props => props.isintro ? 'none' : 'grid'};
grid-template-columns:auto auto auto;
@media (max-width: 600px) {
    display:none;
}
`;

export const Atag = styled.a`
  font-family:'Karla', sans-serif;
  color: #333;

`;

export const MenuBars = styled.div`
display:none;
@media (max-width: 600px) {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-row-gap: 0.5vh;
}
`;
export const BarTop = styled.div`
background:#333;
height:4px;
width: 27px;
border-radius:2px;
transform-origin: 0.75px 4px;
`;

export const BarCenter = styled.div`
background:#333;
height:4px;
width: ${props => props.width};
border-radius:2px;
`;

export const BarBottom = styled.div`
background:#333;
height:4px;
width: ${props => props.width};
border-radius:2px;
transform-origin: 0.75px 4px;
`;
export const BarMotionWrapp = styled(motion.div)`
transform-origin: 0.75px 4px;
`;
