import React from "react";

const Card = ({ image, name, testimony }) => {
	return (
		<>
			<div className="content-card">
				<img src={image} alt={name} />
				<h4 className="name">{name}</h4>
				<p className="para">{testimony}</p>
			</div>
		</>
	);
};

export default Card;
