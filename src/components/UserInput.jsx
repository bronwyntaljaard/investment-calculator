export default function UserInput({ duration, handleChange }) {
	return (
		<form id="user-input">
			<div className="input-group">
				<div>
					<label htmlFor="initial-investment">Initial investment</label>
					<input type="number" id="initial-investment" required></input>
				</div>
				<div>
					<label htmlFor="annual-investment">Annual investment</label>
					<input type="number" id="annual-investment" required></input>
				</div>
			</div>
			<div className="input-group">
				<div>
					<label htmlFor="expected-return">Expected return</label>
					<input type="number" id="expected-return" required></input>
				</div>
				<div>
					<label htmlFor="duration">Duration</label>
					<input
						type="number"
						id="duration"
						required
						value={duration}
						onChange={handleChange}
					></input>
				</div>
			</div>
		</form>
	);
}
