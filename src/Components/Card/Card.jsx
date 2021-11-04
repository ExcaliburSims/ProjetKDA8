import React from "react";
import {motion} from 'framer-motion'


const Card = (props) => {
	return (
		<motion.div className="movie" whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.3 }} >
			<img alt="movies" src={props.link} />
			<div className='movie-info'>
				<h3>{props.title}</h3>
				<p>{props.vote_average}</p>
                {/*<p>{props.id}</p>
                 <p>{props.overview}</p> */}
			</div>
		</motion.div>
	);
};

export default Card;
