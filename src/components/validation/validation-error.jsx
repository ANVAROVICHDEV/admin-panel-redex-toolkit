import { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
	const { error } = useSelector((state) => state.auth);

	const errorMassage = useCallback(() => {
		return Object.keys(error).map((name) => {
			const errMsg = error[name].join(", ");
			return `${name} - ${errMsg}`;
		});
	}, [error]);

	// console.log(error != null && errorMassage());

	return (
		error != null &&
		errorMassage().map((error) => (
			<div className="alert alert-primary" role="alert" key={error}>
				{error}
			</div>
		))
	);
};

export default ValidationError;
