import React from "react";
import PropTypes from "prop-types";

function GamePlay(props) {

	function  formatDisplayedSentence() {
		let sentence = props.sentence.toLowerCase().replaceAll(' ', "\xa0\xa0");

		props.lettersNotGuessed.map((letter) =>
			sentence = sentence.replaceAll(letter.toLowerCase(), " _ ")
		)

		return sentence[0].toUpperCase() + sentence.slice(1);
	}

	return (
		<React.Fragment>
			<p>{formatDisplayedSentence()}</p>

			<div className="letterButtons">
				{props.lettersNotGuessed.map((letter, index) =>
					<button key={index} type="submit" onClick={() => props.onGuessedLetter(letter)}>{letter}</button>
				)}
			</div>

			<p>Playing game with sentence: {props.sentence}</p>
		</React.Fragment>
	)

}

GamePlay.propTypes = {
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter : PropTypes.func
}

export default GamePlay;