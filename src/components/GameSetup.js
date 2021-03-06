import React from "react";
import PropTypes  from "prop-types";
import { useFirestore } from 'react-redux-firebase'

function GameSetup(props) {
	const firestore = useFirestore();

	function addGameDataToFirestore(event) {
		event.preventDefault();
		props.onNewGameCreation(parseInt(event.target.words.value));

		return firestore.collection("gameData").add({
			wordCount: parseInt(event.target.words.value) // I DO NOT NEED TO PUT THIS IN DATABASE!
			// TODO: ADD defaults for guessed letters & miss count to database
		});
	}

	return (
		<React.Fragment>
			<h3>Setup new game</h3>
			<form onSubmit={addGameDataToFirestore}>
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