import { useEffect, useState } from "react";

const Timer = ({ hours = 0, minutes = 0, seconds = 0, paused, setPaused }) => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;

		if (paused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 1);
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [paused]);

	return (
		<div className="stop-watch">
			{time}
			{/* <ControlButtons
				active={isActive}
				isPaused={isPaused}
				handleStart={handleStart}
				handlePauseResume={handlePauseResume}
				handleReset={handleReset}
			/> */}
		</div>
	);
};
export default Timer;
