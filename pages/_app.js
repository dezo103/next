import '../styles/globals.scss'
import Layout from "../components/Layout";
import sport from '../public/sport.jpg'
import Image from "next/image";
import Head from "next/head";

const MyApp = ({Component, pageProps}) => (
    <Layout>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        <Image
            src={sport}
            width={1000}
            height={600}
            alt='preview'
            placeholder='blur' // first download blur image
        />
    </Layout>

)

export default MyApp
