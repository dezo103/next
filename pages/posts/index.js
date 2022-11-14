import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => { // create async actions !!!
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    if (!data) { // error trapping (native next js possibility)
        return {
            notFound: true
        }
    }

    return {  // the only way to return it to props
        props: {posts: data}
    }
}

const Posts = ({posts}) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Heading text={'Posts list'}/>
            <ul>
                {
                    posts && posts.map(({id, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Posts;