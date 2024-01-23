import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, PageNotFound, Register } from "..";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default App;
