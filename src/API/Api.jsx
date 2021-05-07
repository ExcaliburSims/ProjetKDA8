import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card/Card";

const Api = () => {
	const [movies, setMovies] = useState([]);
	const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

	useEffect(() => {
		/* Déterminez les films américains les plus rémunérateurs de 2020
		'https://api.themoviedb.org/3/discover/movie?api_key=c830918bda0a4dcad664e68958cc9d71&primary_release_year=2020&sort_by=revenue.desc'
		*/
		axios
			.get(
				'https://api.themoviedb.org/3/trending/movie/week?api_key=c830918bda0a4dcad664e68958cc9d71&language=en-US'
				/*"https://api.themoviedb.org/3/movie/popular?api_key=c830918bda0a4dcad664e68958cc9d71&page=1"
				 "https://api.themoviedb.org/3/trending/movie/week?api_key=c830918bda0a4dcad664e68958cc9d71"*/ 
			)
			.then((res) => setMovies(res.data.results))
			.catch((e) => console.error(e));
	}, []);
	console.log(movies);

	return (
		<section>
			<div>
				{movies.map((movie) => {
					return (
						<div>
							<Card
								link={linkImage + movie.poster_path}
								title={movie.title}
								vote_average={movie.vote_average}
								id={movie.id}
								overview={movie.overview}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Api;
