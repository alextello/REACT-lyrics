import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Cancion = ({ letra }) => {
	if (letra.length === 0) return null;
	return (
		<Fragment>
			<div>
				<h2 className="text-2xl border-b-2 border-blue-200 text-center my-4">
					Letra de canción
				</h2>
				<div className="text-center pb-15">
					<p className="text-left letra">{letra}</p>
				</div>
			</div>
		</Fragment>
	);
};

Cancion.propTypes = {
	letra: PropTypes.string.isRequired,
};

export default Cancion;
