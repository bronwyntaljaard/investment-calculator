import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults } from "./util/investment";

import { useState } from "react";

function App() {
	const [investmentResults, setInvestmentResults] = useState({
		duration: "",
		initialInvestment: "",
		annualInvestment: "",
		expectedReturn: "",
	});

	// Check if input is valid

	const inputIsValid = investmentResults.duration >= 1;

	function handleChange(event) {
		const { name, value } = event.target;

		let updatedInvestmentResults = {
			...investmentResults,
			[name]: +value,
		};
		setInvestmentResults(updatedInvestmentResults);
	}

	let calculatedInvestmentResults =
		calculateInvestmentResults(investmentResults);

	return (
		<main>
			<Header />;
			<UserInput
				duration={investmentResults.duration}
				expectedReturn={investmentResults.expectedReturn}
				handleChange={handleChange}
			/>
			{!inputIsValid && (
				<p className="center">Please enter a duration greater than 0.</p>
			)}
			{inputIsValid && (
				<Result
					result={calculatedInvestmentResults}
					initialInvestment={investmentResults.initialInvestment}
				/>
			)}
		</main>
	);
}

export default App;
