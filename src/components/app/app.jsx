import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, PageNotFound, Register } from "..";
import { useDispatch } from "react-redux";
import AuthService from "../../service/auth";
import { signuserSuccess } from "../../slice/auth";
import { useEffect } from "react";
import { getItem } from "../../helpers/persistance-storage";

const App = () => {
	const dispatch = useDispatch();

	const getUser = async () => {
		try {
			const response = await AuthService.getUser();
			dispatch(signuserSuccess(response.user));
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		if(getItem('token')){
			getUser()
		}
	}, [])

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
