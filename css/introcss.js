import styled from 'styled-components'
import {motion} from 'framer-motion'


export const IntroWrapper = styled.div`
width:100%;
height:80vh;
background:white;
box-sizing:border-box;
padding:45% 6% 4% 6%;
`;
export const AuthPanel = styled.div`
padding:4vh;
border:1px solid #b1b1b1;
border-radius:10px;
display:grid;
grid-row-gap:1vh;
position: absolute;
width:30vw;
box-sizing: border-box;
left: 50%;
top: 45%;
transform: translate(-50%, -50%);
@media (max-width: 600px) {
    width: 90%;
    top: 40%;
}
`;
export const P = styled.p`
  font-family:'Karla', sans-serif;
  font-size:${props => props.size ? props.size : '1.3rem'};
  justify-self: ${props => props.justify ? props.justify : ''};
  color: ${props => props.color ? props.color : '#333'};
font-weight: ${props => props.weight ? props.weight : '500'};
 `;
 export const AuthFace = styled.a`
    display:grid;
    padding:8px;
    color:white;
    font-family:'Karla', sans-serif;
    grid-template-columns: auto auto;
    background: #3b5998;
    align-items:center;
    border-radius:4px;
 `;
 export const AuthGoogle = styled.a`
 display:grid;
 padding:8px;
 color:#333;
 border:1px solid #b1b1b1;
 font-family:'Karla', sans-serif;
 grid-template-columns: auto auto;
 background: #fbf5f5;
 align-items:center;
 border-radius:4px;
`;

export const LoginComerce = styled.div`
padding:4vh;
border-radius:10px;
display:grid;
grid-row-gap:1vh;
position: absolute;
width:30vw;
box-sizing: border-box;
left: 50%;
top: 75%;
transform: translate(-50%, -50%);
@media (max-width: 600px) {
    width: 90%;
    top:75%;
}
`;

export const ComerceAuth = styled.a`
background:white;
padding:8px;
color:#333;
text-align:center;
font-family: 'Karla', sans-serif;
border-radius:4px;
border:1px solid black;
`;