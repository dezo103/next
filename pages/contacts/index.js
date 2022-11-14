import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => { // create async actions !!!
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) { // error trapping (native next js possibility)
        return {
            notFound: true
        }
    }

    return {  // the only way to return it to props
        props: {contacts: data}
    }
}

const Contacts = ({contacts}) => {
    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Heading tag={'p'} text={'contacts list'}/>
            <ul>
                {
                    contacts && contacts.map(({id, name}) => (
                        <li key={id}>
                            <Link href={`contacts/${id}`}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Contacts;