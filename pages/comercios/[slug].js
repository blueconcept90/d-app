import { useState } from 'react';
import Layout from '../../components/Layout'
import * as Co from '../../css/comerciocss'
import {motion} from 'framer-motion'
import Carousel from 'react-multi-carousel'

const responsivedos = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 4,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
      partialVisibilityGutter: 10
    }
  };



const Comercio = () => {

    const [added, setAdded] = useState(false);
 
    return ( 
        <motion.div>
            <Layout>
                <Co.ComercioWrapper>
                    <Co.PortadaComercio> 
                        <Co.NameComercio> Ateneo Restobar</Co.NameComercio>
                        <Co.InputSearch placeholder="Buscar en la carta..."></Co.InputSearch>
                    </Co.PortadaComercio>
                    <Co.Carta>
                        <Carousel
                        partialVisible
                        responsive={responsivedos}
                        draggable
                        minimumTouchDrag={80}
                        ssr={true}
                        infinite={true}
                        arrows={false}>
                            <Co.ItemCarta> Bebidas </Co.ItemCarta>
                            <Co.ItemCarta> Mariscos </Co.ItemCarta>
                            <Co.ItemCarta> Aperitivos </Co.ItemCarta>
                            <Co.ItemCarta> Tapeos </Co.ItemCarta>
                            <Co.ItemCarta> Vinos </Co.ItemCarta>
                            <Co.ItemCarta> Entradas </Co.ItemCarta>
                        </Carousel>
                    </Co.Carta>
                    <Co.CartaList>
                        <Co.ItemProduct>
                            <Co.ItemNamePrice>
                                <Co.ItemName>Cazuela de Mariscos</Co.ItemName>
                                <Co.ItemPrice>15.00 E$ </Co.ItemPrice>
                            </Co.ItemNamePrice>
                            <Co.ItemAdd>
                                {added ? (
                                    <Co.RestButton> - </Co.RestButton>
                                ) : (
                                    <div></div>
                                )}
                                <Co.ProductImg src="/mariscos.jpg"/>
                                <Co.AddButton>+</Co.AddButton>
                            </Co.ItemAdd>
                        </Co.ItemProduct>
                        <Co.ItemProduct>
                            <Co.ItemNamePrice>
                                <Co.ItemName>Cazuela de Mariscos</Co.ItemName>
                                <Co.ItemPrice>15.00 E$ </Co.ItemPrice>
                            </Co.ItemNamePrice>
                            <Co.ItemAdd>
                                {added ? (
                                    <Co.RestButton> - </Co.RestButton>
                                ) : (
                                    <div></div>
                                )}
                                <Co.ProductImg src="/mariscos.jpg"/>
                                <Co.AddButton>+</Co.AddButton>
                            </Co.ItemAdd>
                        </Co.ItemProduct>
                        <Co.ItemProduct>
                            <Co.ItemNamePrice>
                                <Co.ItemName>Cazuela de Mariscos</Co.ItemName>
                                <Co.ItemPrice>15.00 E$ </Co.ItemPrice>
                            </Co.ItemNamePrice>
                            <Co.ItemAdd>
                                {added ? (
                                    <Co.RestButton> - </Co.RestButton>
                                ) : (
                                    <div></div>
                                )}
                                <Co.ProductImg src="/mariscos.jpg"/>
                                <Co.AddButton>+</Co.AddButton>
                            </Co.ItemAdd>
                        </Co.ItemProduct>
                        <Co.ItemProduct>
                            <Co.ItemNamePrice>
                                <Co.ItemName>Cazuela de Mariscos</Co.ItemName>
                                <Co.ItemPrice>15.00 E$ </Co.ItemPrice>
                            </Co.ItemNamePrice>
                            <Co.ItemAdd>
                                {added ? (
                                    <Co.RestButton> - </Co.RestButton>
                                ) : (
                                    <div></div>
                                )}
                                <Co.ProductImg src="/mariscos.jpg"/>
                                <Co.AddButton>+</Co.AddButton>
                            </Co.ItemAdd>
                        </Co.ItemProduct>
                    </Co.CartaList>
                </Co.ComercioWrapper>
            </Layout>
        </motion.div>
     );
}
 
export default Comercio;