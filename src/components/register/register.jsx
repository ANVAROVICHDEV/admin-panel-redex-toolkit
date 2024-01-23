import { useEffect, useState } from "react";
import { logo } from "../../constants";
import { Input } from "../../ui";
import { useDispatch, useSelector } from "react-redux";
import {
	signuserFailture, signuserSuccess ,signuserStart
} from "../../slice/auth";
import AuthService from "../../service/auth";
import {ValidationError} from ".."
const Register = () => {
	const dispatch = useDispatch();
	const { isLoading , loggedIn} = useSelector((state) => state.auth);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = async (e) => {
		e.preventDefault();
		dispatch(signuserStart());
		const user = { username: name, email, password };
		try {
			const response = await AuthService.userRegister(user);
			dispatch(signuserSuccess(response.user));
		} catch (error) {
			dispatch(signuserFailture(error.response.data.errors));
		}
	};

	useEffect(() => {
		if(loggedIn) {
			navigate('/')
		}
	} , [])
	return (
		<div className="text-center w-25 m-auto">
			<form>
				<svg
					xmlns={logo}
					width="40"
					height="32"
					className="me-2"
					viewBox="0 0 118 94"
					role="img"
				>
					<title>Redux-Toolkit</title>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
						fill="currentColor"
					></path>
				</svg>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
					<ValidationError />
				<Input
					label={"Username"}
					id={"floatingUsername"}
					state={name}
					setState={setName}
				/>
				<Input
					label={"Email"}
					id={"floatingEmail"}
					type={"email"}
					state={email}
					setState={setEmail}
				/>
				<Input
					label={"Password"}
					id={"floatingPassword"}
					type={"password"}
					state={password}
					setState={setPassword}
				/>

				<button
					disabled={isLoading}
					onClick={handleSignIn}
					className="btn btn-primary w-100 py-2 mt-3"
					type="submit"
				>
					{isLoading ? "Loading..." : "Sign In"}
				</button>
				<p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
			</form>
		</div>
	);
};

export default Register;
