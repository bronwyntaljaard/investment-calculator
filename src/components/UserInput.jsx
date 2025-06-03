export default function UserInput({
	duration,
	expectedReturn,
	annualInvestment,
	initialInvestment,
	handleChange,
}) {
	return (
		<section id="user-input">
			<form id="user-input">
				<div className="input-group">
					<p>
						<label htmlFor="initial-investment">Initial investment</label>
						<input
							type="number"
							id="initial-investment"
							name="initialInvestment"
							value={initialInvestment}
							onChange={handleChange}
							required
						></input>
					</p>
					<p>
						<label htmlFor="annual-investment">Annual investment</label>
						<input
							type="number"
							id="annual-investment"
							name="annualInvestment"
							value={annualInvestment}
							onChange={handleChange}
							required
						></input>
					</p>
				</div>
				<div className="input-group">
					<p>
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
					</p>
					<p>
						<label htmlFor="duration">Duration</label>
						<input
							type="number"
							id="duration"
							name="duration"
							required
							value={duration}
							onChange={handleChange}
						></input>
					</p>
				</div>
			</form>
		</section>
	);
}
