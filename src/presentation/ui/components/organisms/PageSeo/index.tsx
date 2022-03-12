import moment from 'moment-timezone';
import 'moment/locale/ja';
import Head from "next/head";
import React from "react"
import {PageSeoProps} from "src/presentation/props/PageSeoProps";

const PageSeo = (props: PageSeoProps) => {

    return (
        <Head>
            <title>{props.title}</title>
            <meta name="robots" content="noindex, nofollow, noarchive"/>
            {props.updateDateTime && (
                <meta name="date" content={moment.tz(props.updateDateTime, 'Asia/Tokyo').toISOString()}/>
            )}
            <meta name="description" content={props.description}/>
        </Head>
    );
}
export default PageSeo;