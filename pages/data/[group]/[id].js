function Page(props) {
    return (
        <div>
            {props.path}
        </div>
    )
}

pageXOffset.getInitialProps = async function( context ) {
    return {
        path : `/data/${context.query.group}/${context.query.id}` 
    }
}

export default Page;