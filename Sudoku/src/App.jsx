import { useState } from "react";
import Landing from "./components/Landing";
import Game from "./components/Game";
import instructions from "./instructions.webp";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const [showInstructions, setShowInstructions] = useState(false);
	const [options, setOptions] = useState({
		level: "",
		size: "",
	});
	return (
		<div className="App">
			{showInstructions ? (
				<div className="instruction">
					<a
						className="close"
						onClick={() => {
							setShowInstructions(!showInstructions);
						}}
					>
						<i class="far fa-times-circle"></i>
					</a>
					<img src={instructions} alt="" />
				</div>
			) : null}
			<a
				className="instructionBtn"
				onClick={() => {
					setShowInstructions(!showInstructions);
				}}
			>
				?
			</a>
			<Router>
				<Switch>
					<Route exact path="/">
						<Landing options={options} setOptions={setOptions} />
					</Route>
					<Route exact path="/game">
						<Game options={options} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
