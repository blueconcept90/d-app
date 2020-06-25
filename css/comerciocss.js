import styled from 'styled-components'

export const ComercioWrapper = styled.div`
  width:100%;
  padding:0% 0% 4% 0%;
  @media (max-width: 600px) {
    padding:18% 0% 4% 0%;
}
`;
export const PortadaComercio = styled.div`
background:linear-gradient(rgba(0,1,12,0),rgb(0, 0, 0)) center center / cover,url(/bar4.jpg) no-repeat;
  background-position:center;
  background-size:cover;
  width:100%;
  position:relative;
  height:50vh;
  @media (max-width: 600px) {
    height:35vh;
    }
`;
export const NameComercio = styled.h3`
  color:white;
  font-family:'Karla', sans-serif;
  position:absolute;
  top:50%;
  left:4vw;
  @media (max-width: 600px) {
    height:35vh;
    }
`;
export const InputSearch = styled.input`
  border-radius:6px;
  border:1px solid #d2d2d2;
  width:25vw;
  height:5vh;
  color:#767f86;
  font-family:'Karla', sans-serif;
  position:absolute;
  bottom:3vh;
  left:4vw;
  padding:6px;
  @media (max-width: 600px) {
    height:5vh;
    width:88vw;
    }
`;
export const Carta = styled.div`
width:100%;
padding:2vh 0 2vh 0;
`;

export const ItemCarta = styled.div`
  background:#9fffce;
  border-radius:30px;
  width:auto;
  height:4vh;
  text-align:center;
  padding:10px;
  font-family:'Karla', sans-serif;
  color: #333;
  font-weight:600;
  margin:6px;
`;
export const CartaList = styled.div`
  width:100%;
  padding:6px;
  border-radius:5px;

`;
export const ItemProduct = styled.div`
  display:grid;
  margin:2% 0 2% 0;
  background: #f1f1f1;
  grid-template-columns:60% 35%;
  align-items:center;
  padding:3% 0 3% 0;
`;
export const ItemNamePrice = styled.div`
display:grid;
grid-template-rows:1fr 1fr;
grid-row-gap:5px;
`;
export const ItemAdd = styled.div`
display:grid;
grid-template-columns:5% 66% 5%;
align-items:center;
grid-column-gap:1vw;
`;
export const ProductImg = styled.img`
  width:40vw;
`;
export const RestButton = styled.a`
background: #fff;
padding: 2px;
color: #f9320b;
font-size:1.4rem;
line-height:1.4;
font-family: 'Karla',sans-serif;
height: 5vh;
width: 5vh;
border-radius: 100%;
text-align: center;
font-weight:600;
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`;

export const AddButton = styled.a`
background: #fff;
padding: 2px;
color: #f9320b;
font-size:1.4rem;
line-height:1.4;
font-family: 'Karla',sans-serif;
height: 5vh;
width: 5vh;
border-radius: 100%;
text-align: center;
font-weight:600;
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
`;

export const ItemName = styled.p`
  font-family:'Karla', sans-serif;
  color:#333;
  font-weight:500;
  font-size:1.2rem;
  margin:0;
`;
export const ItemPrice = styled.p`
  font-family:'Karla', sans-serif;
  color:#333;
  font-weight:600;
  margin:0;
`;
