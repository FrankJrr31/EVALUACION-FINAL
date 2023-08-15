const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoProductoPage = () => {

    let { id } = useParams();
    const [nombre, setNombre] = useState([])
    const [precio, setPrecio] = useState([])
    const [stock, setStock] = useState([])
    const [categorias, setCategorias] = useState([])
    const [idCategoria, setIdCategoria] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: {nombre: nombre, precio: precio, stock: stock,
                categoria: 'http://localhost:8080/api/categorias/'+idCategoria
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        
        client({
            method: 'GET',
            path: '/api/categorias'
        }).done(response=>{
            let categorias2 = [];
            response.entity._embedded.categorias.map(categoria => {
                categorias2.push({value: categoria._links.self.href.split('/').slice(-1), label: categoria.nombre})
            })
            setCategorias(categorias2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Producto</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <label>Precio</label>
                <input type="text" id="precio" name="precio" onChange={(e)=>setPrecio(e.target.value)} />
                <label>Nombre</label>
                <input type="text" id="stock" name="stock" onChange={(e)=>setStock(e.target.value)} />
                <label htmlFor='categoria'>Categoria</label>
                <select name="categoria" id="categoria" onChange={(e)=>{setIdCategoria(e.target.value)}}>
                    {categorias.map(categoria => {	
                        return (
                            <option key={categoria.value} value={categoria.value}>{categoria.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Producto" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoProductoPage;