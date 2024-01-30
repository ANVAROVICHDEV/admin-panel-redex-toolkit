import { useEffect, useState } from "react";
import { Form } from "..";
import ArticleService from "../../service/article";
import { useNavigate } from "react-router-dom";
const CreateArticle = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [body, setBody] = useState("");
	const navigate = useNavigate();

	
	const formSubmit = async (e) => {
		e.preventDefault();
		const article = { title, description, body };
		try {
			const response = await ArticleService.postArticles(article);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const formProps = {
		title,
		setTitle,
		body,
		setBody,
		description,
		setDescription,
		formSubmit,
	};

	return (
		<div className="text-center">
			<div className="fs-2">Create article</div>
			<Form {...formProps} />
		</div>
	);
};

export default CreateArticle;
