import axios from "axios";

const ArticleService = {
    async getArticles() {
        const {data} = await axios.get('/articles')
        return data
    }
}

export default ArticleService;