const HelloWorld = (props) => {

    const handleDelete = () => {
        props.onDelete()
    }

    return (
        <>
            <h1>Hello {props.nama}!!!</h1>
            <button onClick={handleDelete}>Del</button>
        </>
    )
}

export default HelloWorld;