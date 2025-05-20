import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { calculateInvestmentResults } from "./util/investment";

import { useState } from "react";

function App() {
	const [investmentResults, setInvestmentResults] = useState({
		duration: "",
		initialInvestment: "",
		annualInvestment: "",
		expectedReturn: "",
	});
	console.log("investmentResults1", investmentResults);

	function handleChange(event) {
		const { name, value } = event.target;

		let updatedInvestmentResults = {
			...investmentResults,
			[name]: +value,
		};
		console.log("updatedInvestmentResults", updatedInvestmentResults);
		setInvestmentResults(updatedInvestmentResults);
		console.log("investmentResults", investmentResults);
	}

	let calculatedInvestmentResults =
		calculateInvestmentResults(investmentResults);
	console.log("calculatedInvestmentResults", calculatedInvestmentResults);

	return (
		<main>
			<Header />;
			<UserInput
				duration={investmentResults.duration}
				expectedReturn={investmentResults.expectedReturn}
				handleChange={handleChange}
			/>
			<Result
				result={calculatedInvestmentResults}
				initialInvestment={investmentResults.initialInvestment}
			/>
		</main>
	);
}

export default App;
