import gameReducer from "./game-reducer";
import gameplayReducer from "./gameplay-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	gameReducer: gameReducer,
	gameplayReducer: gameplayReducer
});

export default rootReducer;