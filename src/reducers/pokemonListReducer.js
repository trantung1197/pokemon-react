const defaultState = {
	loading: false,
	data: [],
	errorMsg: "",
};

const pokemonListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "POKEMON_LIST_LOADING":
			return {
				...state,
                loading: true,
				errorMsg: "",
				data:[]
			};
		case "POKEMON_LIST_SUCCESS":
			return {
				...state,
				loading: false,
                data: action.data,
                errorMsg: ""
			};
		case "POKEMON_LIST_FAIL":
			return {
				...state,
				loading: false,
				data:[],
                errorMsg: action.err,
			};

		default:
			return state;
	}
};

export default pokemonListReducer;
