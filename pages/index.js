import { useState } from 'react'
import { motion } from "framer-motion"
import Layout from '../components/Layout'
import * as I from '../css/introcss'
import {FaFacebookSquare } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {TiSocialFacebook} from 'react-icons/ti'
import Link from 'next/link';
 
const Index = () => {
 
    return (  
        <motion.div>
            <Layout title="Diner App - Inicio " nofooter noburguer>
                <I.IntroWrapper>
                    <I.AuthPanel>
                        <I.P justify="center" color="#656565" weight="600" size="1.7rem"> Ingresar </I.P>
                        <Link href="/dashboard">
                        <I.AuthFace><TiSocialFacebook color="white" size="25px"/> Ingresar con Facebook </I.AuthFace>
                        </Link>
                        <Link href="/dashboard">
                            <I.AuthGoogle><FcGoogle  size="25px"/> Ingresar con Google </I.AuthGoogle>
                        </Link>
                    </I.AuthPanel>
                    <I.LoginComerce>
                        <I.P weight="600" weight="500"> Ingresa a tu comercio y comienza a ganar tiempo y dinero </I.P>
                        <Link href="/dashboard">
                            <I.ComerceAuth>Ingresar como Comerciante</I.ComerceAuth>
                        </Link>
                    </I.LoginComerce>
                </I.IntroWrapper>
            </Layout>
        </motion.div>
    );
}
 
export default Index;