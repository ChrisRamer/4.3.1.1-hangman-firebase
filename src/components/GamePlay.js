import React from "react";
import PropTypes from "prop-types";

function GamePlay(props) {
	return (
		<p>Playing game with {props.wordCount} words!</p>
	)
}

GamePlay.propTypes = {
	wordCount: PropTypes.number
}

export default GamePlay;