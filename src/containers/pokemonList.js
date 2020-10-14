import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPokemonList } from "../actions/pokemonActions";
import LoadingPage from "../components/loadingPage";
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

//JSX
const PokemonList = (props) => {
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		console.log(pageLoading);
		
		props.getListPokemon(1);
	}, []);

	const { pokemonList, pageLoading } = props;

	const showData = () => {
		if (pokemonList) {
			return pokemonList.map((ele) => {
				return <PokemonCard key={ele.name} pokeID={ele} />;
			});
		}
	};

	const handlePageChange = (pageNumber) => {
		props.getListPokemon(pageNumber);
		setActivePage(pageNumber);
	};

	return (
		<>
			{pageLoading ? (
				<LoadingPage></LoadingPage>
			) : (
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
			)}
		</>
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
		pageLoading: state.pokemonListReducer.loading,
		pokemonList: state.pokemonListReducer.data,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
