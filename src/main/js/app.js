const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const NuevoProductoPage = require('./pages/nuevo-producto');
const PageNuevaCategoria = require('./pages/nueva-venta');
const PageEditarProducto = require('./pages/editar-producto');


const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/nuevo-producto', element: <NuevoProductoPage />},
	{path: '/nuevo-venta', element: <PageNuevaVenta />},
	{path: '/editar-producto/:id', element: <PageEditarProducto />},
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
