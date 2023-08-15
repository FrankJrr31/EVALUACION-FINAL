const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {productos: [], categorias: [] };
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.productos });
		});
		client({ method: 'GET', path: '/api/categorias' }).done(response => {
			this.setState({ categorias: response.entity._embedded.categorias });
		});

	}
	render() {
		return (
			<>
				<h1>Demo App!</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Productos" emoji="🍉" />
						<ProductoList productos={this.state.productos} />
						<Link to="/nuevo-producto">Nuevo Producto</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Categorias" emoji="🎵" />
						<CategoriaList categorias={this.state.categorias} />
						<Link to="/nueva-categoria">Nueva Categoria</Link>
					</div>
				</div>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}
class CategoriaList extends React.Component {
	render() {
		const categorias = this.props.categorias.map(categoria =>
			<Categoria key={categoria._links.self.href} categoria={categoria} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{musicos}
				</tbody>
			</table>
		)
	}
}

class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>
					<Link to={`/editar-producto/${id}`}>Editar</Link>
				</td>
			</tr>
		)
	}
}

class Categoria extends React.Component {
	render() {
		const id = this.props.categoria._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.categoria.nombre}</td>

			</tr>
		)
	}
}

module.exports = PageHome;