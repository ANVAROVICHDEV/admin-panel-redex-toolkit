import axios from './api';

const ArticleService = {
	async getArticle() {
        const {data} = await axios.get('/articles')
        return data
    },
	async getArticleDetails(slug) {
        const {data} = await axios.get(`/articles/${slug}`)
        return {data}
    }
};

export default ArticleService;
