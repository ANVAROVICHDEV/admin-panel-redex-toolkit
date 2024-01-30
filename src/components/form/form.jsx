import { Input, TextArea } from "../../ui";

const Form = (props) => {
	const { title, setTitle, body, setBody, description, setDescription , formSubmit} = props;
	return (
		<form className="w-75 mx-auto">
			<Input label={"Title"} state={title} setState={setTitle} />
			<TextArea
				label={"Description"}
				state={description}
				setState={setDescription}
			/>
			<TextArea label={"Body"} state={body} setState={setBody} height="300px" />
			<button onClick={formSubmit} className="btn btn-primary w-100 py-2 mt-3" type="submit">
				Create
			</button>
		</form>
	);
};

export default Form;
