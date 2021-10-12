import React from "react";
import "../components/stylings/Landing.css";
import { Link } from "react-router-dom";
function Landing({ options, setOptions }) {
	return (
		<div className="landing">
			<div className="landing_container">
				<h1>Sudoku Sazy</h1>
				<div className="options">
					<div className="nes-select is-dark">
						<select
							required
							id="dark_select"
							value={options.level}
							onChange={(e) => {
								setOptions({ ...options, level: e.target.value });
							}}
						>
							<option value="" disabled hidden>
								Level
							</option>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
							<option value="very hard">Very Hard</option>
						</select>
					</div>
					<div className="nes-select is-dark">
						<select
							required
							id="dark_select"
							value={options.size}
							onChange={(e) => {
								setOptions({ ...options, size: e.target.value });
							}}
						>
							<option value="" disabled hidden>
								Size
							</option>
							<option value="4">4x4</option>
							<option value="9">9x9</option>
							<option value="16">16x16</option>
						</select>
					</div>
				</div>
				<Link to="/game">
					<div
						className="play-btn"
						onClick={() => {
							console.log(options);
						}}
					>
						<i className="fas fa-play"></i>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Landing;
