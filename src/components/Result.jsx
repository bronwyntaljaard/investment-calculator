import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({ result, initialInvestment }) {
	return (
		<>
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(result).map(([index, entry]) => (
						<tr key={index}>
							<td>{entry.year}</td>
							<td>{formatter.format(entry.valueEndOfYear)}</td>
							<td>{formatter.format(entry.interest)}</td>
							<td>
								Total Interest
								{/* Need to add total interest, clean up code, rename functions correctly in App.jsx */}
							</td>
							<td>
								{formatter.format(
									entry.year * entry.annualInvestment + initialInvestment
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
