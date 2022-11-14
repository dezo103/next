import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    if (!data) { // error trapping (native next js possibility)
        return {
            notFound: true
        }
    }

    return {  // the only way to return it to props
        props: {contact: data}
    }
}

const Contact = ({contact}) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>
    );
};

export default Contact;