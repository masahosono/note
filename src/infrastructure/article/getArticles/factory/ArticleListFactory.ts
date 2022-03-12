import Article from "src/domain/article/Article";
import ArticleList from "src/domain/article/ArticleList";
import {GetArticlesResponse} from "src/infrastructure/article/getArticles/response";
import {injectable} from "tsyringe";

@injectable()
class ArticleListFactory {
    from = (response: GetArticlesResponse): ArticleList => {
        return ArticleList.of(
            response.articles.map(article => {
                return Article.of(
                    article.matterResult.data.id,
                    article.matterResult.data.title,
                    article.matterResult.data.categoryId,
                    article.matterResult.data.createDateTime,
                    article.matterResult.data.updateDateTime,
                    article.matterResult.data.description,
                    article.matterResult.data.thumbnail,
                    article.slug,
                    article.matterResult.content,
                    article.matterResult.data.published)
            })
        );
    }
}

export default ArticleListFactory;