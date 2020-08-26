import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Biografia = ({ biografia }) => {
	if (biografia.length === 0) return null;
	const { strArtistThumb, strGenre, strBiographyES } = biografia;
	return (
		<Fragment>
			<div>
				<h2 className="text-2xl border-b-2 border-blue-200 text-center my-4">Biografía</h2>
				<img src={strArtistThumb} alt="logo artista" className="mb-12" />
				<p className="mb-5">
					Género: <strong>{strGenre}</strong>{' '}
				</p>
				<div className="text-center mb-15">
					<p className="text-left">{strBiographyES}</p>
				</div>
				<div className="text-center space-x-20 my-12">
					<a
						href={`https://${biografia.strFacebook}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
					</a>
					<a
						href={`https://${biografia.strTwitter}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
					</a>
					<a
						href={`https://${biografia.strLastFMChart}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="fab fa-lastfm fa-3x"></i>
					</a>
				</div>
			</div>
		</Fragment>
	);
};

Biografia.propTypes = {
	biografia: PropTypes.object.isRequired,
};

export default Biografia;
