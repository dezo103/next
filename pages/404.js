import Heading from "../components/Heading";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from "next/head";

const Error = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')},
            3000)
    }, [router])

    return (
        <div>
            <Head>
                <title>Error</title>
            </Head>
            <Heading text={'404'}/>
            <Heading tag={'p'} text={'this is error 404'}/>
        </div>
    );
};

export default Error;