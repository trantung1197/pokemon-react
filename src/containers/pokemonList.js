import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPokemonList } from "../actions/pokemonActions";
import PokemonCard from "../components/pokemonCard";
import Pokemon from "./pokemon";

//Style Component
const Container = styled.section`
	width: 100%;
	margin: 50px auto;
`;

const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 90%;
	max-width: 1000px;
	margin: 50px auto;
`;

const BoxButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const ButtonLoadMore = styled.button`
	min-width: 120px;
	background-color: #30a7d7;
	border: none;
	border-radius: 6px;

	color: #fff;
	font-size: 20px;

	padding: 15px 18px;
	transition: 0.4s ease;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: #1b82b1;
	}
`;

//JSX
const PokemonList = (props) => {
	const [listPokemon, setListPokemon] = useState("");
	const [pageState, setPageState] = useState(1);
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		props.getListPokemon();
	}, []);

	const { pokemonList } = props;

	const showData = () => {
		console.log("pokemonList", pokemonList);
		if (pokemonList) {
			return pokemonList.map((ele) => {
				return <PokemonCard key={ele.name} pokeID={ele} />;
			});
		}
	};

	const handleLoadMore = (page) => {};

	const handlePageChange = (pageNumber) =>{
		setActivePage(pageNumber);
	};

	return (
		<Container>
			<ListWrapper>{showData()}</ListWrapper>
			<BoxButton>
				<Pagination
					activePage={activePage}
					itemsCountPerPage={10}
					totalItemsCount={450}
					pageRangeDisplayed={5}
					onChange={handlePageChange.bind(this)}
				/>
			</BoxButton>
		</Container>
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
		pokemonList: state.pokemonListReducer.data,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
