import React from "react";

const Card = ({ id, image, name, testimony, deleteTestimonyCard }) => {
	return (
		<>
			<div className="content-card flex">
				<img src={image} alt={name} />
				<h4 className="name">{name}</h4>
				<p className="para">{testimony}</p>
				<button onClick={() => deleteTestimonyCard(id)}>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</>
	);
};

export default Card;
