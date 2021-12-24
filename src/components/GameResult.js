import React from "react";
import PropTypes from "prop-types";

function GameResult(props) {
	function formatDisplayedSentence() {
		let sentence = props.sentence.toLowerCase().replaceAll(' ', "\xa0\xa0");

		props.lettersNotGuessed.map((letter) =>
			sentence = sentence.replaceAll(letter.toLowerCase(), " _ ")
		)

		return sentence[0].toUpperCase() + sentence.slice(1);
	}

	function getResult() {
		if (props.misses < 6) {
			return <div class="panel">
				<p>{formatDisplayedSentence()}</p>

				<div className="letterButtons">
					{props.lettersNotGuessed.map((letter, index) =>
						<button key={index} type="submit" onClick={() => props.onGuessedLetter(letter)}>{letter}</button>
					)}
				</div>
			</div>
		} else {
			return <div class="panel">
				<p>Ohno! You lost!</p>
				<p>The sentence was <b>{props.sentence}</b></p>
			</div>
		}
	}

	const currentlyVisibleState = getResult();

	return (
		<React.Fragment>
			{currentlyVisibleState}
		</React.Fragment>
	)
}

GameResult.propTypes = {
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter: PropTypes.func,
	misses: PropTypes.number
}

export default GameResult;