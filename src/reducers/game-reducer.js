export default (state = {}, action) => {
	const { selectedSentence, currentGame, inGameSetup } = action;
	switch (action.type) {
		case "GAME_START":
			return Object.assign({}, state, {
				selectedSentence: selectedSentence,
				currentGame: currentGame,
				inGameSetup: inGameSetup
			});
		default:
			return state;
	}
}