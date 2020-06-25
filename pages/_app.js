import {useEffect} from 'react'
import { ZEITUIProvider, CSSBaseline} from '@zeit-ui/react'
import '../css/global.css';
import 'react-multi-carousel/lib/styles.css';
import 'antd/dist/antd.css'
import {ConfigProvider } from 'antd'
import esES from 'antd/lib/locale-provider/es_ES'
import Router from 'next/router'



// import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {

  
    return (
      <ZEITUIProvider>
          <CSSBaseline />
                <Component {...pageProps} />
      </ZEITUIProvider>
    )
  }

  export default MyApp 