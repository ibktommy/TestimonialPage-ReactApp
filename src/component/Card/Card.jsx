import React from "react";

const Card = ({ image, name, testimony }) => {

	return (
		<>
			<div className="content-card flex">
				<img src={image} alt={name} />
				<h4 className="name">{name}</h4>
				<p className="para">{testimony}</p>
				<button>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</>
	);
};

export default Card;
