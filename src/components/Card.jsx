import React from 'react';

function Card(props) {
	const { name, username, email } = props;
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3">
			<img src={'https://robohash.org/' + username + '?size=200x200'} alt="Robo" />
			<div className="tc">
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;
