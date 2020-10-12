import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Pokemon from "./containers/pokemon";
import PokemonList from "./containers/pokemonList";
function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={PokemonList} />
				<Route path="/pokemon/:pokemon" exact component={Pokemon} />
				<Redirect to={"/"} />
			</Switch>
		</div>
	);
}

export default App;
