import { useState } from 'react';
import * as De from '../css/destacadocss'
import {motion } from 'framer-motion'
import Carousel from 'react-multi-carousel'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 6,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
      partialVisibilityGutter: 10
    }
  };
  const responsivedos = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      partialVisibilityGutter: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 6,
      partialVisibilityGutter: 10
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      partialVisibilityGutter: 10
    }
  };

const bares = ['bar1', 'bar2', 'bar3', 'bar4', 'bar5', 'bar6', 'bar7', 'bar8', 'bar9', 'bar10']
const Destacados = ({destacados}) => {
 
    return (
        <motion.div>
            <De.DestacadosWrapper>
                <De.TitleDes>Destacados:</De.TitleDes>
                <Carousel
                partialVisible
                 responsive={responsive}
                 draggable
                 minimumTouchDrag={80}
                 ssr={true}
                 infinite={false}
                 arrows={false}>
                     {bares.map((item, index) => {
                         return(
                             <>
                            <De.BoxResto key={index} background={item}></De.BoxResto>
                            <De.P> Lorem Ips </De.P>
                            </>
                         )
                     })}
                </Carousel>
               
            </De.DestacadosWrapper>
        </motion.div>
      );
}
 
export default Destacados;