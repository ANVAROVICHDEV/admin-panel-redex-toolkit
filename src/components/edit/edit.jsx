import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getArticleStart, getArticleSuccess } from "../../slice/article";
import ArticleService from "../../service/article";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../form/form";

const Edit = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [body, setBody] = useState("");

	useEffect(() => {
		const getArticleDetail = async () => {
			dispatch(getArticleStart());
			try {
				const response = await ArticleService.getArticleDetails(slug);
				dispatch(getArticleSuccess(response.data.article));
				setTitle(response.data.article.title);
				setBody(response.data.article.body);
				setDescription(response.data.article.description);
			} catch (error) {
				console.log(error);
			}
		};
		getArticleDetail();
	}, [slug]);

	const formSubmit = async (e) => {
		e.preventDefault();
		const article = { title, description, body };
		try {
			const response = await ArticleService.editArticle(slug, article);
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
			<div className="fs-2">Edit article</div>
			<Form {...formProps} />
		</div>
	);
};

export default Edit;
