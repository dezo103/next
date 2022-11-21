import Heading from "../components/Heading";
import styles from '../styles/Home.module.scss'
import Head from "next/head";
import Socials from "../components/Socials";


export const getStaticProps = async () => {
    const {API_HOST} = process.env
    const response = await fetch(API_HOST + `/socials/`)
    const data = await response.json()
    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {socials: data}
    }
}

const Home = ({socials}) => (
    <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
        <Heading text={'Hello World'}/>
        <Socials socials={socials}/>
    </div>
)

export default Home