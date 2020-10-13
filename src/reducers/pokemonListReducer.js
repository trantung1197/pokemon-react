const defaultState = {
	loading: false,
	data: [],
	errorMsg: "",
	count: 0
};

const pokemonListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "POKEMON_LIST_LOADING":
			return {
				...state,
                loading: true,
				errorMsg: "",
				data:[],
				count: 0
			};
		case "POKEMON_LIST_SUCCESS":
			return {
				...state,
				loading: false,
                data: action.data.results,
				errorMsg: "",
				count: action.data.count
			};
		case "POKEMON_LIST_FAIL":
			return {
				...state,
				loading: false,
				data:[],
				errorMsg: action.err,
				count: 0
			};

		default:
			return state;
	}
};

export default pokemonListReducer;
