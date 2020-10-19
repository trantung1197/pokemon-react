const stateDefault = {
	pokemonDetail: {},
	loading: false,
	errMsg: "",
};

const pokemonReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "POKEMON_DATA_LOADING":
			return {
				...state,
				loading: true,
				pokemonDetail: {},
				errMsg: "",
			};
		case "POKEMON_DATA_SUCCESS":
			return {
				...state,
				loading: false,
				pokemonDetail: action.payload,
				errMsg: "",
			};
		case "POKEMON_DATA_FAIL":
			return {
				...state,
				loading: false,
				pokemonDetail: {},
				errMsg: action.err,
			};
		default:
			return state;
	}
};

export default pokemonReducer;
