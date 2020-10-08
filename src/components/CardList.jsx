import React from 'react';
import Card from './Card';

const CardList = (props) => {
	return (
		<div>
			{props.filteredRobots.map((robot) => {
				return <Card key={robot.id} name={robot.name} username={robot.username} email={robot.email} />;
			})}
		</div>
	);
};

export default CardList;
