const HelloWorld = (props) => {
    const handleDelete = () => {
        props.onDelete()
    }

    return (
        <div className="p-5 rounded-xl bg-blue-100 flex flex-col gap-5">
            <h1 className="text-xl">Hello {props.nama}!!!</h1>
            <button className="w-fit bg-red-600 text-white p-3 rounded-2xl" onClick={handleDelete}>Del</button>
        </div>
    )
}

export default HelloWorld;