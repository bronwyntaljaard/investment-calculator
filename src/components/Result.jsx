import { formatter } from "../util/investment";

export default function Result({ result, initialInvestment }) {
	return (
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
				{result.map((entry) => (
					<tr key={entry.year}>
						<td>{entry.year}</td>
						<td>{formatter.format(entry.valueEndOfYear)}</td>
						<td>{formatter.format(entry.interest)}</td>
						<td>
							{formatter.format(
								entry.valueEndOfYear -
									(entry.year * entry.annualInvestment + initialInvestment)
							)}
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
	);
}
