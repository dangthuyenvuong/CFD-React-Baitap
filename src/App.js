// import "./App.scss";
import Button from "./components/Button";
import { NarrowIcon } from "./components/Icon";

function App() {
	return (
		<>
			<Button
				size="large"
				icon={<NarrowIcon direction="right" />}
				type="icon-right"
				round
			>
				HUYNH ANH KIET
			</Button>
		</>
	);
}

export default App;
