import gameplayReducer from "../../reducers/gameplay-reducer.js";

describe("gameplayReducer", () => {
	let action;
	const gameData = {
		lettersNotGuessed: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
		misses: 0
	};

	test("Should return default state if there is no action type passed into the reducer", () => {
		expect(gameplayReducer({}, { type: null })).toEqual({});
	});

	test("Should successfully return the updated state when a letter is guessed", () => {
		const { lettersNotGuessed, misses } = gameData;
		action = {
			type: "GUESS_LETTER",
			lettersNotGuessed: lettersNotGuessed,
			misses: misses
		};

		expect(gameplayReducer({}, action)).toEqual({
			lettersNotGuessed: lettersNotGuessed,
			misses: misses
		});
	});
});