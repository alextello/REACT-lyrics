import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = (props) => {
	const [busqueda, setBusqueda] = useState({
		artista: '',
		cancion: '',
	});

	const [error, setError] = useState(false);

	const { artista, cancion } = busqueda;
	// funcion para leer contenido de cada input
	const actualizarState = (e) => {
		setBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	// Consultar las apis
	const buscarInformacion = (e) => {
		e.preventDefault();
		if (artista.trim() === '' || cancion.trim() === '') {
			setError(true);
			return;
		}
		setError(false);
	};

	return (
		<div className="container mx-auto">
			<div className="py-8 bg-teal-400 text-white text-center text-3xl hover:text-teal-600">
				<p>Buscador de letras</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
				{error ? (
					<Error
						cols="col-span-2"
						mensaje="El nombre del artista y canción son obligatorios"
					/>
				) : null}
				<form className="w-full col-span-2" onSubmit={buscarInformacion}>
					<div className="flex items-center border-b  border-teal-500 py-2">
						<input
							className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							placeholder="Artista"
							aria-label="artista"
							name="artista"
							onChange={actualizarState}
							value={artista}
						/>
						<input
							className="appearance-none bg-transparent border-l-2 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							placeholder="Canción"
							aria-label="cancion"
							name="cancion"
							onChange={actualizarState}
							value={cancion}
						/>
						<button
							className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-10 rounded"
							type="submit"
						>
							Buscar
						</button>
					</div>
				</form>
				<div>2</div>
				<div>3</div>
			</div>
		</div>
	);
};

Formulario.propTypes = {};

export default Formulario;
