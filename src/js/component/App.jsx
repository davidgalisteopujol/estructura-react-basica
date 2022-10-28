import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar.jsx"; 
import Footer from "./Footer.jsx";
import Home from "../views/Home.jsx";
import View from "../views/View.jsx";

//create your first component
const App = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<BrowserRouter>
			
				<Route exact path="/" component={Home} />
				<Route path="/detail/:id/:geeks" component={View} />
			
			</BrowserRouter>
			<Footer/>
		</div>
	);
};

export default App;
