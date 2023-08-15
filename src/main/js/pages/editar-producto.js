const React = require('react');
const {useState, useEffect} = require('react');
const {useParams, Link} = require('react-router-dom');
const client = require('../client');

const PageEditarProducto = ()=>{

    const {id} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/productos/'+id,
            headers: {'Content-Type': 'application/json'}
        }).done((response)=>{
            setProducto(response.entity)
        })    
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/productos/'+id,
            headers: {'Content-Type': 'application/json'},
            entity: producto
        }).done(()=>window.location = "/")
    }

    return(
        <>
            <h1>Editar Producto: {id}</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input 
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={(e)=>{setProducto({...producto, nombre: e.target.value})}} />
                <label>Precio</label>
                <input 
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={(e)=>{setProducto({...producto, precio: e.target.value})}} />
                <label>Stock</label>
                <input 
                    type="number"
                    name="stock"
                    value={producto.stock}
                    onChange={(e)=>{setProducto({...producto, stock: e.target.value})}} />
                <input 
                    type="text"
                    name="categoria"
                    value={producto.categoria}
                    onChange={(e)=>{setProducto({...producto, categoria: e.target.value})}} />
                <br/>
                <input type='submit' value={`Editar Musico ${id}`} />
            </form>
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = PageEditarProducto