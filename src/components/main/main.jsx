import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../ui";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ArticleService from "../../service/article";
import { articleStart, articleSuccess } from "../../slice/article";
const Main = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { article, isLoading } = useSelector((state) => state.article);
	const { loggedIn, user } = useSelector((state) => state.auth);

	const getArticles = async () => {
		dispatch(articleStart());
		try {
			const response = await ArticleService.getArticle();
			dispatch(articleSuccess(response.articles));
		} catch (error) {
			console.log(error);
		}
	};

	const deleteArticle = async (slug) => {
		try {
			const response = await ArticleService.deleteArticle(slug);
			getArticles();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div className="album py-5 bg-body-tertiary">
			<div>
				{isLoading && <Loader />}

				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{article &&
						article.map((item) => (
							<div className="col" key={item.id}>
								<div className="card shadow-sm h-100">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										aria-label="Placeholder: Thumbnail"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title>Placeholder</title>
										<rect width="100%" height="100%" fill="#55595c"></rect>
										<text x="50%" y="50%" fill="#eceeef" dy=".3em">
											Thumbnail
										</text>
									</svg>
									<div className="card-body">
										<p className="card-text fw-bold m-0">{item.title}</p>
										<p className="card-text">{item.description}</p>
									</div>
									<div className="card-footer d-flex justify-content-between align-items-center">
										<div className="btn-group">
											<button
												onClick={() => navigate(`article/${item.slug}`)}
												type="button"
												className="btn btn-sm btn-outline-secondary"
											>
												View
											</button>
											{loggedIn && user.username === item.author.username && (
												<>
													<button
													onClick={() => navigate(`/edit-article/${item.slug}`)}
														type="button"
														className="btn btn-sm btn-outline-secondary"
													>
														Edit
													</button>
													<button
														onClick={() => deleteArticle(item.slug)}
														type="button"
														className="btn btn-sm btn-outline-danger"
													>
														Delete
													</button>
												</>
											)}
										</div>
										<small className="text-body-secondary text-capitalize">
											{item.author.username}
										</small>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Main;
