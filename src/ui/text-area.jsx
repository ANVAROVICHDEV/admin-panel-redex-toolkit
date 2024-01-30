const TextArea = ({ label, id , state, setState, height="100px" }) => {
	return (
		<div className="form-floating">
			<textarea
				className="form-control"
				placeholder={label}
				id={id}
                style={{height:height}}
				value={state}
				onChange={(e) => setState(e.target.value)}
			></textarea>
			<label htmlFor="floatingTextarea">{label}</label>
		</div>
	);
};

export default TextArea;
