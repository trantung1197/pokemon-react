import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokemonList } from "../actions/pokemonActions";
import Pokemon from "./pokemon";

const PokemonList = (props) => {
	const [listPokemon, setListPokemon] = useState('');

	useEffect(() => {
		props.getListPokemon();
	}, []);

	const { pokemonData } = props;

	const showData = (page) =>{
		console.log(pokemonData);
	}

	return (
		<div>
			<p>pokemonList</p>
			{showData(2)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		getListPokemon: (page = 1) => {
			dispatch(getPokemonList(page));
		},
	};
};

const mapStateToProps = (state) => {
	return {
		pokemonData: state.pokemonListReducer.data,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
