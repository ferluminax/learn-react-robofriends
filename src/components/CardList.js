import React from 'react';
import Card from './Card';

const CardList = ({ cardRobots }) => {
	// if (true) {
	// 	throw new Error('Noo Noo');
	// }
	return (
		<div>
	  	{
	  		cardRobots.map(robot => {
				return <Card
				key={robot.id}
				id={robot.id}
				name={robot.name}
				email={robot.email}
				/>
			})
	  	}
	 	</div>
	);
}

export default CardList;