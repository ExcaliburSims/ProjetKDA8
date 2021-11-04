import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Banner = styled.div`
	position: fixed;
	z-index: 99;
	height: 10%;
	width: 100%;
	background: transparent;
`;

export const Container = styled.div`
	max-width: 1140px;
	margin: auto;
`;

export const Navigation = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	.logo span {
		display: inline-block;
		text-align: center;
		line-height: 55px;
		width: 60px;
		height: 60px;
		font-size: 34px;
		border-radius: 50%;
		color: red;
		border: 2px solid red;
	
`;
export const Menu = styled.div`
	display: flex;
	position: relative;
	justify-content: space-around;
	padding: 20px 15px;
	width: 30%;
	right: 0;
	font-size: 1.2rem;
	.link {
		display: inline-block;
		box-sizing: border-box;
		padding: 0.4em 0.2em;
		color: #51c3fa;
		text-decoration: none;
		text-shadow: 0 1px 0 white;
		background-color: transparent;
		transition: background-color 0.3s ease;
	}

	.link:hover,
	.link:focus {
		color: #c351fa;
		background-color: rgba(255, 255, 255, 0.4);
		transition: background-color 0.3s ease 0.4s;
	}
	.link:focus {
		border-bottom: 3px solid #c351fa;
	}
`;

function Header() {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);
	return (
		<div className="header">
			<div className="container">
				<Banner className={colorChange ? "navbar colorChange" : "navbar"}>
					<Container>
						<Navigation>
							<div className="logo">
								<NavLink to="/">
									<span> VK </span>
								</NavLink>
							</div>
							<Menu>
								<div class="current">
									<NavLink to="/" className="link">
										HOME
									</NavLink>
								</div>
								<div>
									<NavLink to="/Movie" className="link">
										MOVIES
									</NavLink>
								</div>
								<div>
									<NavLink to="/About" className="link">
										ABOUT
									</NavLink>
								</div>
							</Menu>
						</Navigation>
					</Container>
				</Banner>
			</div>
		</div>
	);
}

export default Header;
