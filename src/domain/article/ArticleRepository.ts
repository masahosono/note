import ArticleList from "src/domain/article/ArticleList";

interface ArticleRepository {

    getArticles(): ArticleList

}
export default ArticleRepository;