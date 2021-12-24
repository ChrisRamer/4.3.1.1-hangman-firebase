import React from "react";
import PropTypes from "prop-types";
import images from "./../img/index.js";
import GameResult from "./GameResult";

function GamePlay(props) {

	function getImage() {
		switch (props.misses) {
			case 0:
				return images.image0;
			case 1:
				return images.image1;
			case 2:
				return images.image2;
			case 3:
				return images.image3;
			case 4:
				return images.image4;
			case 5:
				return images.image5;
			default:
				return images.image6;
		}
	}

	return (
		<React.Fragment>
			<div class="gameplay">
				<div class="image">
					<img src={getImage()} alt={`You have made ${props.misses} incorrect guesses`} />
				</div>
				<GameResult sentence={props.sentence} lettersNotGuessed={props.lettersNotGuessed} onGuessedLetter={props.onGuessedLetter} misses={props.misses} />
			</div>
		</React.Fragment>
	)

}

GamePlay.propTypes = {
	sentence: PropTypes.string,
	lettersNotGuessed: PropTypes.array,
	onGuessedLetter : PropTypes.func,
	misses : PropTypes.number
}

export default GamePlay;