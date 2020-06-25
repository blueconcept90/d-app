import { useState } from 'react';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width:100%;
  height:30vh;
  background:black;
`;

const Footer = () => {
const [value, setValue] = useState();
 
    return ( 
        <>
        <FooterWrapper>

        </FooterWrapper>
        </>
     );
}
 
export default Footer;