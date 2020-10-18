import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemonData } from "../actions/pokemonActions";

function Pokemon(props) {
	console.log("props", props);

	useEffect(() => {
		props.getPokemonData(props.match.params.pokemon);
	}, []);

	return <div>{props.match.params.pokemon}</div>;
}

const mapStateToProps = (state) => {
	return {
		// pokemonData: state.
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemonData: (id) => {
			dispatch(getPokemonData(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
