import { useState } from "react";
import "./App.css";
import RsbuildLogo from "./assets/rsbuild-logo.svg";
import RspackLogo from "./assets/rspack-logo.svg";

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<div className="content">
			<h1>Rsbuild with React</h1>
			<p>
				<a href="https://rsbuild.dev" target="_blank" rel="noreferrer">
					<img src={RsbuildLogo} alt="Rsbuild logo" className="logo" />
				</a>
				<a href="https://rspack.dev" target="_blank" rel="noreferrer">
					<img src={RspackLogo} alt="Rspack logo" className="logo2" />
				</a>
			</p>
			<p>
				Start building amazing things with Rsbuild.{" "}
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</p>
		</div>
	);
};

export default App;
