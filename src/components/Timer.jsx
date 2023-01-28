import { useEffect, useState } from 'react';

export const Timer = () => {
	const [isStart, setIsStart] = useState(false),
		[min, setMin] = useState(5),
		[sec, setSec] = useState(0);
	let interval = null;

	useEffect(() => {
		if (isStart !== false) {
			interval = setTimeout(() => {
				if (sec === 0) {
					setTimeout(() => {
						setSec(59);
						setMin(min - 1);
					}, 1000);
				} else {
					setSec(sec - 1);
				}
			}, 1000);
		}
		if (min === 0 && sec === 0) {
			clearInterval(interval);
		}
	}, [sec, min, isStart]);

	function handleStart() {
		setIsStart(!isStart);
	}

	function handlePause() {
		setIsStart(false);
	}

	function handleReset() {
		setMin(5);
		setSec(0);
		setIsStart(false);
		clearInterval(interval);
	}

	return (
		<>
			<div>
				<div>
					{min}m {sec}s
				</div>
				<div>
					<button onClick={handleStart}>START</button>
					<button onClick={handlePause}>STOP</button>
					<button onClick={handleReset}>RESET</button>
				</div>
			</div>
		</>
	);
};
