import gameReducer from "../../reducers/game-reducer.js";

describe("gameReducer", () => {
	let action;
	const gameData = {
		selectedSentence: "Hello beautiful world!"
	};

	test("Should return default state if there is no action type passed into the reducer", () => {
		expect(gameReducer({}, { type: null })).toEqual({});
	});

	test("Should successfully start a new game with the selected sentence", () => {
		const { selectedSentence } = gameData;
		action = {
			type: "GAME_START",
			selectedSentence: selectedSentence
		};

		expect(gameReducer({}, action)).toEqual({
			selectedSentence: selectedSentence
		});
	});
});