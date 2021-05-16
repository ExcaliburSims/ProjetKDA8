import React from "react";
import videos from "./sim.mp4";
import buttonPlay from "./play.png";
import "./style1.css";

function section1() {
	return (
		<div>
			<video
				src={videos}
				controls
				preload="metadata"
				id="myVideo"
				poster="./zzz.jpg"
			></video>
			<div class="content">
				{/* <h1>Heading</h1>
				<p>Lorem ipsum...</p> */}
				<button id="myBtn" className='single' onclick="myFunction()">
					<img src={buttonPlay} className='wave' alt="Play" />
				</button>
			</div>
		</div>
	);
}

export default section1;
