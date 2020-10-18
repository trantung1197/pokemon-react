import Axios from "axios";

const URL_API = "https://pokeapi.co/api/v2/pokemon/";
const perPage = 12;

//pokemon list
export const getPokemonList = (page) => {
	const offset = page * perPage - perPage;

	return (dispatch) => {
		dispatch(getPokemonListRequest());

		Axios({
			method: "GET",
			url: URL_API + `?limit=12&offset=${offset}`,
		})
			.then((result) => dispatch(getPokemonListSuccess(result.data)))
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

//pokemon data
export const getPokemonData = (id) => {
	return (dispatch) => {
		dispatch(getPokemonDataRequest());

		Axios({
			method: "GET",
			url: URL_API + id,
		})
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	};
};

const getPokemonDataRequest = () => {
	return { type: "POKEMON_DATA_LOADING" };
};
const getPokemonDataSuccess = (payload) => {
	return { type: "POKEMON_DATA_SUCCESS" };
};
const getPokemonDataFail = (err) => {
	return { type: "POKEMON_DATA_FAIL" };
};
