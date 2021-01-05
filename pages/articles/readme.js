import Head from 'next/head'

function Readme(props) {
    return (
        <div>
            <Head>
                <title>Read Me</title>
            </Head>
            <h1>Read me</h1>

            <a href="/articles">&lt; Back to List</a>
        </div>
    )
}

export default Readme;