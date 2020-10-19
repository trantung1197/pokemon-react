import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getPokemonData } from "../actions/pokemonActions";

//style component

const Wraper = styled.div`
	width: 100%;
	height: 100vh;
	padding: 50px auto;
`;

// component
function Pokemon(props) {
	const { match, pokemonData } = props;

	useEffect(() => {
		const { getPokemonDataDetail } = props;
		getPokemonDataDetail(match.params.pokemon);
	}, []);

	return (
		<div className="pokemon-container">
			<Wraper>{props.match.params.pokemon}</Wraper>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		pokemonData: state.pokemonReducer.pokemonDetail,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemonDataDetail: (id) => {
			dispatch(getPokemonData(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
