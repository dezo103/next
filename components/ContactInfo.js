import Heading from "./Heading";

const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}

    if (!contact) {
        return <Heading tag={'h3'}  text={'contact is empty or not found'}/>
    }

    return (
        <>
            <div>
                <strong>{email}</strong>
            </div>
            <div>
                <strong>Address</strong>
                {`${street} ${suite} ${city} ${zipcode}`}
            </div>
        </>
    )
};

export default ContactInfo;