import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()

    const paths = data.map(({id}) => ({
        params: {id: id.toString()}
    }))

    return {
        paths,
        fallback: false // if error will be returned 404
    }
}

export const getStaticProps = async (context) => {
    const {id} = context.params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()

    if (!data) { // error trapping (native next js possibility)
        return {
            notFound: true
        }
    }

    return {  // the only way to return it to props
        props: {post: data}
    }
}

const Post = ({post}) => {
    return (
        <>
            <Head>
                <title>Contact page</title>
            </Head>
            <PostInfo post={post}/>
        </>
    );
};

export default Post;