import { React, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import buttonPlay from "./play.png";
/* import Card from "../Card/Card"; */
/* import button from "./zzz.jpg"; */
import "./style1.css";
import "./styleTry.css";

function Section1() {
	const [movies, setMovies] = useState([]);
	const linkImage = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

	axios
		.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=c830918bda0a4dcad664e68958cc9d71&page=1`
		)
		.then((res) => setMovies(res.data.results))
		.catch((e) => console.error(e));

	return (
		<div className="slideshow">
			<ReactPlayer
				className="myVideo"
				width="100%"
				height="100vh"
				url="https://www.youtube.com/embed/6JnN1DmbqoU"
				title="YouTube video player"
				frameborder="0"
				controls="0"
				showinfo="0"
				modestbranding="1"
				autohide="1"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></ReactPlayer>

			{movies.map((movie) => {
				return (
					<div className="slideshow-image">
						<img
							src={linkImage + movie.backdrop_path}
							alt="Images"
							className="poster"
						/>
					</div>
				);
			})}
			<div class="content">
				{/* <h1>Heading</h1>
				<p>Lorem ipsum...</p> */}
				<button id="myBtn" className="single" onclick="myFunction()">
					<img src={buttonPlay} className="wave" alt="Play" />
				</button>
			</div>
		</div>
	);
}

export default Section1;
