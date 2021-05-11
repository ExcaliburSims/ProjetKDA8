import { React, useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card/Card";
import styled from "styled-components";
import { FaSearch /* , FaTimes */ } from "react-icons/fa";
/* import Input from "../Components/Input-field"; */

export const SearchBloc=styled.div`
width:25vw;
position:relative;
left:55%;
`
export const SearchBar = styled.form`
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color:  #282c34;
	padding: 0.5rem 0.8rem;
	border-radius: 100px;
	color: rgba(202, 206, 221, 0.8);
	box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
	.Input {
		margin: 0 0.5rem;
		width: 30%;
		border: none;
		outline: none;
		background-color:  #282c34;
		color: rgba(202, 206, 221, 0.8);
		::placeholder {
			color: rgba(202, 206, 221, 0.8);
		}
	}
`;

const Api = () => {
	const [movies, setMovies] = useState([]);
	const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
	const [searchMovie, setSearchMovie] = useState("");

	useEffect(() => {
		axios
			.get(
				"https://api.themoviedb.org/3/discover/movie?api_key=c830918bda0a4dcad664e68958cc9d71&primary_release_year=2020&sort_by=revenue.desc"
			)
			.then((res) => setMovies(res.data.results))
			.catch((e) => console.error(e));
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		fetch(
			"https://api.themoviedb.org/3/search/movie?api_key=c830918bda0a4dcad664e68958cc9d71&query=" +
				searchMovie
		)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	};

	const handleOnChange = (e) => {
		setSearchMovie(e.target.value);
	};

	return (
		<>
			<SearchBloc>
				<SearchBar onSubmit={handleOnSubmit}>
					{/* <FaTimes /> */}
					<input
						type="text"
						class="Input"
						placeholder="Search...."
						onChange={handleOnChange}
						value={searchMovie}
					/>
					<FaSearch />
				</SearchBar>
			</SearchBloc>

			<div className="movie-container">
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
		</>
	);
};

export default Api;
