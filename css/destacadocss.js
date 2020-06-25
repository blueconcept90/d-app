import styled from 'styled-components'
export const DestacadosWrapper = styled.div`
  width:100%;
  & .react-multi-carousel-item{
    margin:26px;
} 
  @media (max-width: 600px) {
    width:100%;
    & .react-multi-carousel-item{
      margin:0px;
    }
`;
export const BoxResto = styled.div`
width:15vw;
height:15vw;

background-image:url('/${props => props.background}.jpg');
background-size:contain;
background-position:center;
border-radius:100%;
border:3px solid #ccfde4;
@media (max-width: 600px) {
width:20vw;
height:20vw;
margin-left:4vw;
}
`;
export const TitleDes = styled.h4`
  font-family:'Karla', sans-serif;
  color: #333;
  margin-left:4vw;
`;
export const P = styled.p`
  font-family:'Karla',sans-serif;
  color:#333;
  margin-left:4vw;
`;