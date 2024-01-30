import { Route, Routes } from "react-router-dom";
import { Login, Main, Navbar, PageNotFound, Register, ArticleDetail, CreateArticle, Edit } from "..";
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

	// const getArticles = async () => {
	// 	dispatch(articleStart());
	// 	try {
	// 		const response = await ArticleService.getArticle();
	// 		dispatch(articleSuccess(response.articles));
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	

	useEffect(() => {
		if (getItem("token")) {
			getUser();
		}
		// getArticles();
	}, []);

	return (
		<div className="container mx-auto">
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/article/:slug" element={<ArticleDetail />} />
				<Route path="/edit-article/:slug" element={<Edit />} />
				<Route path="/create-article" element={<CreateArticle />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	);
};

export default App;
