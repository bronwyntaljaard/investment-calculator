export default function UserInput({
	duration,
	expectedReturn,
	annualInvestment,
	initialInvestment,
	handleChange,
}) {
	return (
		<form id="user-input">
			<div className="input-group">
				<div>
					<label htmlFor="initial-investment">Initial investment</label>
					<input
						type="number"
						id="initial-investment"
						name="initialInvestment"
						value={initialInvestment}
						onChange={handleChange}
						required
					></input>
				</div>
				<div>
					<label htmlFor="annual-investment">Annual investment</label>
					<input
						type="number"
						id="annual-investment"
						name="annualInvestment"
						value={annualInvestment}
						onChange={handleChange}
						required
					></input>
				</div>
			</div>
			<div className="input-group">
				<div>
					<label htmlFor="expected-return">Expected return</label>
					<input
						type="number"
						id="expected-return"
						name="expectedReturn"
						step="0.1"
						required
						value={expectedReturn}
						onChange={handleChange}
					></input>
				</div>
				<div>
					<label htmlFor="duration">Duration</label>
					<input
						type="number"
						id="duration"
						name="duration"
						required
						value={duration}
						onChange={handleChange}
					></input>
				</div>
			</div>
		</form>
	);
}
