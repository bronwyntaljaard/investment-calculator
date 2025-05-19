import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

import { useState } from "react";

function App() {
	const [duration, setDuration] = useState();

	function handleChange(event) {
		setDuration(event.target.value);
	}

	return (
		<main>
			<Header />;
			<UserInput handleChange={handleChange} />
			<Result duration={duration} />
		</main>
	);
}

export default App;
