import ArticlePageGetPathsDataResultDto from "src/applications/dto/ArticlePageGetPathsDataResultDto";
import ArticlePageGetPropsDataResultDto from "src/applications/dto/ArticlePageGetPropsDataResultDto";
import ArticleService from 'src/applications/shared/ArticleService'
import CategoryService from "src/applications/shared/CategoryService";
import Article from "src/domain/article/Article";
import ArticleList from "src/domain/article/ArticleList";
import ResolvedArticle from "src/domain/article/ResolvedArticle";
import CategoryList from "src/domain/category/CategoryList";

import {container, injectable} from "tsyringe";

const articleService = container.resolve(ArticleService);
const categoryService = container.resolve(CategoryService);

@injectable()
class ArticlePageService {

    getPropsData = (articleId: string): ArticlePageGetPropsDataResultDto => {

        const articleList: ArticleList =
            articleService.getArticles();

        const categoryList: CategoryList = categoryService.getCategoryList();

        const article: Article =
            articleList.getArticleById(articleId);

        const resolvedArticle: ResolvedArticle =
            article.resolve(categoryList)

        return ArticlePageGetPropsDataResultDto.of(
            resolvedArticle);
    }

    getPathsData = (): ArticlePageGetPathsDataResultDto => {

        const articleList: ArticleList =
            articleService.getArticles();

        const publishedArticleList: ArticleList =
            articleList.getPublishedArticles();

        return ArticlePageGetPathsDataResultDto.of(
            publishedArticleList);
    }
}
export default ArticlePageService;