import { useEffect, useState } from "react";
import $ from "jquery";
import "../sudokuJS";
import "../sudokuJS.css";
import "./stylings/Game.css";
import { useHistory } from "react-router";
import Timer from "./Timer";
const Game = ({ options }) => {
	const history = useHistory();
	const [mySudokuJS, setMySudokoJS] = useState("");
	const [pause, setPause] = useState(false);
	useEffect(() => {
		if (options.size === "") {
			history.push("/");
		}
		// document.getElementById("sudoku").innerHTML = "";
		const sudokuBoard = $("#sudoku").sudokuJS({
			difficulty: options.level,
			boardSize: parseInt(options.size),
		});

		// document.getElementById("sudoku").innerHTML += `
		// <div className="play">
		// 	<i className="fas fa-play-circle" id="fa-play-circle"></i>
		// </div>
		// `;
		// document.getElementById("fa-play-circle").addEventListener("click", () => {
		// 	setPause(!pause);
		// });
		// const sudokuBoardCells = document.querySelectorAll(".sudoku-board-cell");

		if (options.level === "easy") {
			for (let i = 0; i <= 20; i++) {
				sudokuBoard.solveStep();
			}
		}
		setMySudokoJS(sudokuBoard);
	}, []);

	if (options.size === "") {
		return "";
	}
	return (
		<div className="game">
			<h3>Sudoku</h3>
			<div className="timer">
				<Timer paused={pause} setPaused={setPause} />
				{/* <div className="time">{time}</div> */}
				<div
					className="pausebtn"
					onClick={() => {
						setPause(!pause);
					}}
				>
					{pause ? <i className="fas fa-pause-circle"></i> : <i className="fas fa-play-circle"></i>}
				</div>
			</div>
			<div className="su">
				<div id="sudoku" className="sudoku-board"></div>
				{pause ? (
					<div className="play">
						<a>
							<i
								className="fas fa-play-circle"
								id="fa-play-circle"
								onClick={() => {
									setPause(false);
								}}
							></i>
						</a>
					</div>
				) : (
					""
				)}
			</div>
			<div className="buttons">
				<button
					className="nes-btn"
					onClick={() => {
						mySudokuJS.solveAll();
					}}
				>
					Solve
				</button>

				<button
					className="nes-btn"
					onClick={() => {
						mySudokuJS.solveStep();
					}}
				>
					Hint
				</button>
			</div>
		</div>
	);
};

export default Game;
