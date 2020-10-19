import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonListReducer";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({
	pokemonListReducer,
	pokemonReducer,
});

export default rootReducer;
