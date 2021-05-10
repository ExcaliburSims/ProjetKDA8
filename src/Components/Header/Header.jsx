//import "./header.css";
//import {Navigation,Container} from "./stylehead";
import styled from "styled-components";
import { FaSearch, FaTimes } from "react-icons/fa";

export const Container = styled.div`
	max-width: 1140px;
	margin: auto;
	background-color:yellow
	z-index:99;
`;

export const Navigation = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	color: blue;
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
		font-weight: 600;
		text-transform: uppercase;
	}
`;

export const Menu = styled.div`
	background-color: green;
	display: flex;
	position: relative;
	justify-content: space-around;
	padding: 20px 15px;
	width: 30%;
	right: 0;
	font-size: 1.5rem;
	color: rgba(202, 206, 221, 0.8);
	outline: none;
	.menu-active {
		color: #fff;
	}
	div:hover {
		border-bottom: #f82249 2px solid;
		color: #fff;
	}
	div::before {
		content: "";
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #f82249;
		visibility: hidden;
		transition: all 0.3s ease-in-out 0s;
	}
`;
export const SearchBar = styled.div`
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 50%;
	padding: 0.5rem 0.8rem;
	border-radius: 100px;
	color: rgba(202,206,221,0.8);
	box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
	.input {
		margin: 0 0.5rem;
		width: 100%;
		border: none;
		outline: none;
		color: black;
		::placeholder {
			color: rgba(202, 206, 221, 0.8);
		}
	}
`;

function Header() {
	return (
		<div className="header">
			<div className="container">
				<Container>
					<Navigation>
						<div className="logo">
							<span>VK</span>
						</div>
						<SearchBar className="search-wrapper">
							<FaTimes />
							<input type="text" class="input" placeholder="Search...." />
							<FaSearch />
						</SearchBar>
						<Menu>
							<div class="menu-active">HOME</div>
							<div>MOVIES</div>
							<div>ABOUT</div>
						</Menu>
					</Navigation>
				</Container>
			</div>
		</div>
	);
}

export default Header;
