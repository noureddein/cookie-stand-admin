import Head from "next/head";

const RenderHead=({title})=>{
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default RenderHead;