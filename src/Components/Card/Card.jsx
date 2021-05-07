import React from "react";

const Card = (props) => {
	return (
		<div>
			<img alt="movies" src={props.link} />
			<div>
				<h2>{props.title}</h2>
				<p>{props.vote_average}</p>
                <p>{props.id}</p>
                <p>{props.overview}</p>
			</div>
		</div>
	);
};

export default Card;
