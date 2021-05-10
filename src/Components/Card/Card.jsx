import React from "react";


const Card = (props) => {
	return (
		<div className="movie">
			<img alt="movies" src={props.link} />
			<div className='movie-info'>
				<h3>{props.title}</h3>
				<p>{props.vote_average}</p>
                {/*<p>{props.id}</p>
                 <p>{props.overview}</p> */}
			</div>
		</div>
	);
};

export default Card;
