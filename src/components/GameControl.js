import React from "react";
import GamePlay from "./GamePlay";
import GameSetup from "./GameSetup";

class AppControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inGameSetup: true,
			currentGame: null
		};
	}

	handleStartingNewGame = (newGame) => {
		console.log("New game started with "  + newGame.wordCount + " words!");
		this.setState({
			currentGame: newGame,
			inGameSetup: false
		});
	}

	render() {
		let currentlyVisibleState = null;

		if (this.state.inGameSetup) {
			currentlyVisibleState = <GameSetup onNewGameCreation={this.handleStartingNewGame}  />;
		}
		else {
			currentlyVisibleState = <GamePlay wordCount={this.state.currentGame.wordCount} />;
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
			</React.Fragment>
		)
	}
}

export default AppControl;