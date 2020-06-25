import {motion} from 'framer-motion'
import styled from 'styled-components'

export const DashboardWrapper = styled.div`
width:100%;
padding:8% 0% 4% 0%;
@media (max-width: 600px) {
  padding:24% 0% 4% 0%;
  }
`;
export const TitleDes = styled.h4`
margin-left:4vw;
  font-family:'Karla', sans-serif;
  color: #333;
  @media (max-width: 600px) {
    
    }
  
`;
export const LocalesWrapper = styled.div`
width:25vw;
height:40vw; 
margin-left:4vw;
background:#ccfde4;
border-top-left-radius:6px;
border-top-right-radius:6px;
@media (max-width: 600px) {
    width:40vw;
    height:50vw;
    
margin-left:4vw;
    }
`;
export const LocalWrapp = styled.div`
  width:25vw;
  height:20vw;
  border-top-left-radius:6px;
border-top-right-radius:6px;
  background-image:url('/${props => props.background}.jpg');
  
  background-size:contain;
  background-position:center;
@media (max-width: 600px) {
    width:40vw;
    height:30vw;
    }
`;
export const Pe = styled.p`
  font-family:'Karla',sans-serif;
  color:#000;
  padding:0 2vw 0 2vw;
  margin:0;
`;