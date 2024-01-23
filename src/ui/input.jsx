const Input = ({ label, id, type = "text", state, setState }) => {
	return (
		<div className="form-floating mt-2">
			<input
				type={type}
				className="form-control"
				id={id}
				placeholder={label}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
			<label htmlFor="floatingUsername">{label}</label>
		</div>
	);
};

export default Input;
