import React from "react";
import "./UserCard.scss";

const UserCard = ({ usersData }) => {
	return (
		<div className="cards">
			{usersData.map((userData) => {
				const { id, image, name, testimony } = userData;
				return (
					<div key={id} className="cards-content">
						<img className="cards-content-img" src={image} alt={name} />
						<h2 className="cards-content-name">{name}</h2>
						<p className="cards-content-testimony">{testimony}</p>
					</div>
				);
			})}
		</div>
	);
};

export default UserCard;
