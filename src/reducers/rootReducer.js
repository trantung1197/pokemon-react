import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonListReducer";

const rootReducer = combineReducers({
	pokemonListReducer,
});

export default rootReducer;
