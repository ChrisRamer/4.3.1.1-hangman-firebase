import React from "react";
import GamePlay from "./GamePlay";
import GameSetup from "./GameSetup";

class AppControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inGameSetup: true,
			currentGame: null,
			gameState: "NOT_STARTED",
			selectedSentence: null,
			lettersNotGuessed: [
				"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
			],
			currentImage: 0
		};
	}

	getSentence = (wordCount) => {
		const sentences = [
			"Hello beautiful world!", // 3
			"Words are very fun!", // 4
			"Words make up a sentence.", // 5
			"This is a truly incredible sentence!", // 6
			"This sentence definitely has exactly 7 words.", // 7
			"This sentence wholeheartedly has more than 5 words.", // 8
			"This is a sentence that is a bit longer...", // 9
			"Did you know, a sentence is comprised of several words?" // 10
		]

		const selectedSentence = sentences.find(x => x.split(" ").length === wordCount);
		return selectedSentence;
	}

	handleStartingNewGame = (newGame) => {
		this.setState({
			currentGame: newGame,
			selectedSentence: this.getSentence(newGame.wordCount),
			inGameSetup: false
		});
	}

	handleGuessingLetter = (letterGuessed) => {
		console.log("Guessed letter " + letterGuessed + "!");
		const newLettersNotGussed = this.state.lettersNotGuessed.filter(x => x !== letterGuessed);

		this.setState({
			lettersNotGuessed: newLettersNotGussed
		});

		if (this.state.selectedSentence.toUpperCase().includes(letterGuessed)) {
			console.log("Guessed correctly!");
		} else {
			console.log("Guessed incorrectly!");
		}
	}

	render() {
		let currentlyVisibleState = null;

		if (this.state.inGameSetup) {
			currentlyVisibleState = <GameSetup onNewGameCreation={this.handleStartingNewGame}  />;
		} else {
			currentlyVisibleState = <GamePlay sentence={this.state.selectedSentence} lettersNotGuessed={this.state.lettersNotGuessed} onGuessedLetter={this.handleGuessingLetter} />;
		}

		return (
			<React.Fragment>
				{currentlyVisibleState}
			</React.Fragment>
		)
	}
}

export default AppControl;