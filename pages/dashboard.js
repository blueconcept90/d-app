import { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import Layout from '../components/Layout'
import Destacados from '../components/Destacados'
import * as D from '../css/dashboardcss'
import Carousel from 'react-multi-carousel'
import Link from 'next/link'
const responsivedos = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 3,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      partialVisibilityGutter: 10
    }
  };


 
const Dashboard = () => {

    const [value, setValue] = useState();
    const [geoInfo, setGeoInfo] = useState()

    const bares = ['bar1', 'bar2', 'bar3', 'bar4', 'bar5', 'bar6', 'bar7', 'bar8', 'bar9', 'bar10']

    useEffect( ()=> {
        async function getGeoInfo() {
            let response = await fetch('https://ipapi.co/json/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'GET',
            });
            response = await response.json()
            setGeoInfo(response)
        }
        getGeoInfo()
    }, [])

    useEffect(() => {
        console.log(geoInfo)    
    }, [geoInfo])

 
    return (
        <motion.div>
            <Layout title="Diner App - Dashboard ">
                <D.DashboardWrapper>
                    <Destacados />
                    <D.TitleDes>Restaurantes:</D.TitleDes>
                <Carousel
                partialVisible
                 responsive={responsivedos}
                 draggable
                 minimumTouchDrag={80}
                 ssr={true}
                 infinite={true}
                 arrows={false}>
                     {bares.map((item, index) => {
                         return(
                             <Link href="/comercios/[slug]" as="/comercios/abc">
                             <D.LocalesWrapper key={index}>
                                <D.LocalWrapp background={item}></D.LocalWrapp>
                                <D.Pe> Resto Lorem </D.Pe>
                            </D.LocalesWrapper>
                            </Link>
                         )
                     })}
                </Carousel>
                <D.TitleDes>Bares:</D.TitleDes>
                <Carousel
                partialVisible
                 responsive={responsivedos}
                 draggable
                 minimumTouchDrag={80}
                 ssr={true}
                 infinite={true}
                 arrows={false}>
                     {bares.reverse().map((item, index) => {
                         return(
                             <D.LocalesWrapper key={index}>
                                <D.LocalWrapp background={item}></D.LocalWrapp>
                                <D.Pe> Bares Lorem </D.Pe>
                            </D.LocalesWrapper>
                         )
                     })}
                </Carousel>
                <D.TitleDes>Favoritos:</D.TitleDes>
                <Carousel
                partialVisible
                 responsive={responsivedos}
                 draggable
                 minimumTouchDrag={80}
                 ssr={true}
                 infinite={true}
                 arrows={false}>
                     {bares.map((item, index) => {
                         return(
                             <D.LocalesWrapper key={index}>
                                <D.LocalWrapp background={item}></D.LocalWrapp>
                                <D.Pe> Favoritos  </D.Pe>
                            </D.LocalesWrapper>
                         )
                     })}
                </Carousel>
                </D.DashboardWrapper>
            </Layout>
        </motion.div>
      );
}
 
export default Dashboard;