import React from "react";
import videos from "./sim.mp4";
import "./style1.css";
import {FaRegPlayCircle} from 'react-icons/fa'


function section1() {
	return (
		<div>
			<video
			src={videos}
				controls
				preload="metadata" id='myVideo'
				poster='./zzz.jpg'
			>
			</video>
			<div class="content">
				<h1>Heading</h1>
				<p>Lorem ipsum...</p>
				<button id="myBtn" onclick="myFunction()">
				<FaRegPlayCircle/>
				</button>
			</div>
		</div>
	);
}

export default section1;
