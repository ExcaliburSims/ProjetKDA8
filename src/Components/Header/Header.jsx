import "./header.css";

function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="row justify-content-between">
					<div className="logo">
						<span>VK</span>
					</div>
					<div className="menu content-between">
						<div>HOME</div>
						<div>MOVIES</div>
						<div>ABOUT</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
