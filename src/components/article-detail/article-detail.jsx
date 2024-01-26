import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../../service/article";
import { useDispatch } from "react-redux";
import { getArticleStart, getArticleSuccess } from "../../slice/article";

const ArticleDetail = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();

	const getArticleDetail = async () => {
		dispatch(getArticleStart());
		try {
			const response = await ArticleService.getArticleDetails(slug);
			dispatch(getArticleSuccess(response.data.article));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticleDetail();
	}, [slug]);

	return <div>ArticleDetail : {slug}</div>;
};

export default ArticleDetail;
