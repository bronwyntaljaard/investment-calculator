export default function Result({ duration }) {
	let durationArray = Array.from({ length: duration });

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
					{durationArray.map((year, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>Investment Value</td>
							<td>Interest</td>
							<td>Total Interest</td>
							<td>Invested Capital</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
