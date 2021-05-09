import React from "react";
import videos from "./sim.mp4";
/* import styled from "styled-components"; */
import "./style1.css";

/* export const Section1 = styled.div`
	background-color: #282c34;
	height: 100vh;
	border: 1px solid #282c34;
	text-align: center;
`;
 */

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
					Pause
				</button>
			</div>
			{/* var elem = document.getElementById("myvideo");
            if (elem.requestFullscreen) {
            elem.requestFullscreen();
            } */}
			{/* <Section1></Section1> */}
		</div>
	);
}

export default section1;
