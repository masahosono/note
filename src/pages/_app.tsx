import 'highlightjs/styles/a11y-dark.css'
import {AppProps} from 'next/app'
import React from 'react'
import "reflect-metadata"
import 'src/presentation/ui/styles/global.css'

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp;
