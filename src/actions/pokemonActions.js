import Axios from "axios";

const URL_API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=";
const perPage = 20;

export const getPokemonList = (page) => {
	const offset = page * perPage - perPage;

	return (dispatch) => {
		dispatch(getPokemonListRequest());

		Axios({
			method: "GET",
			url: URL_API + `?limit=20&offset=${offset}`,
		})
			.then((result) => dispatch(getPokemonListSuccess(result)))
			.catch((err) => dispatch(getPokemonListFail(err)));
	};
};

const getPokemonListRequest = () => {
	return { type: "POKEMON_LIST_LOADING" };
};
const getPokemonListSuccess = (data) => {
	return { type: "POKEMON_LIST_SUCCESS", data };
};
const getPokemonListFail = (err) => {
	return { type: "POKEMON_LIST_FAIL", err };
};
