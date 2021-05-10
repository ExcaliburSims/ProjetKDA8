import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card/Card";
import styled from 'styled-components';


const SecAPI=styled.section`
color:red;
`;

const Api = () => {
	const [movies, setMovies] = useState([]);
	const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
/* 	const API_KEY='c830918bda0a4dcad664e68958cc9d71';
	const MOVIE_WEEK='https://api.themoviedb.org/3/trending/movie/week?'; */

	useEffect(() => {
		
		axios
			.get(
				/*'https://api.themoviedb.org/3/discover/movie?api_key=c830918bda0a4dcad664e68958cc9d71&primary_release_year=2020&sort_by=revenue.desc'
			*/
			"https://api.themoviedb.org/3/search/movie?api_key=c830918bda0a4dcad664e68958cc9d71&query=avengers"
				)
			.then((res) => setMovies(res.data.results))
			.catch((e) => console.error(e));
	}, []);
	console.log(movies);

	return (
		<SecAPI>
			<div className='movie-container'>
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
		</SecAPI>
	);
};

export default Api;
