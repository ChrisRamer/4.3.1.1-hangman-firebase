import React from "react";
import PropTypes  from "prop-types";

function GameSetup(props) {
	function handleNewGameFormSubmission(event) {
		event.preventDefault();
		props.onNewGameCreation({
			wordCount: parseInt(event.target.words.value)
		});
	}

	return (
		<React.Fragment>
			<h3>Setup new game</h3>
			<form onSubmit={handleNewGameFormSubmission}>
				<b>Word count:</b>
				<br />
				<input
					type="number"
					name="words"
					min={3}
					max={10}
					defaultValue={3}
					required={true}/>
				<br />
				<button type="submit">{"Start game"}</button>
			</form>
		</React.Fragment>
	)
}

GameSetup.propTypes = {
	onNewGameCreation : PropTypes.func
}

export default GameSetup;