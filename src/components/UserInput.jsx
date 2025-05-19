export default function UserInput() {
	return (
		<form id="user-input">
			<div className="input-group">
				<div>
					<label for="initial-investment">Initial investment</label>
					<input type="number" id="initial-investment" required></input>
				</div>
				<div>
					<label for="annual-investment">Annual investment</label>
					<input type="number" id="annual-investment" required></input>
				</div>
			</div>
			<div className="input-group">
				<div>
					<label for="expected-return">Expected return</label>
					<input type="number" id="expected-return" required></input>
				</div>
				<div>
					<label for="duration">Duration</label>
					<input type="number" id="duration" required></input>
				</div>
			</div>
		</form>
	);
}
