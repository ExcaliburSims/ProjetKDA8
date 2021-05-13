import React from "react";
import "./Style/reset.css";
import "tachyons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Movie from "./Components/Pages/Movie";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";

function App() {
	return (
		<div class="main">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Movie" component={Movie} />
					<Route exact path="/About" component={About} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
