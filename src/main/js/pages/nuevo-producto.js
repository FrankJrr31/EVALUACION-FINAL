const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoProductoPage = () => {

    let { id } = useParams();
    const [nombre, setNombre] = useState([])
    const [precio, setPrecio] = useState([])


    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: {nombre: nombre, precio: precio},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    return (
        <>
            <h1>Nuevo Producto</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <label>Precio</label>
                <input type="text" id="precio" name="precio" onChange={(e)=>setPrecio(e.target.value)} />
                <input type="submit" value="Nuevo Producto" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoProductoPage;