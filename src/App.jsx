import React,{useState,useEffect}  from "react";
import "./Style/reset.css";
import "tachyons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Movie from "./Components/Pages/Movie";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Loader from './Components/Loader/Loader';


function App() {
	const [Loading,setLoading]=useState(true);
	useEffect(() => {
		setTimeout(() => {
		  setLoading(false);
		}, 10000);
	  }, []);
	return (
		<div class="main">{
			Loading === true ? <Loader/> :
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Movie" component={Movie} />
					<Route exact path="/About" component={About} />
				</Switch>
			</Router>
		}
			
		</div>
	);
}

export default App;
