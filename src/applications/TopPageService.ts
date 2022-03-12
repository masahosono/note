import TopPageGetPathsDataResultDto from "src/applications/dto/TopPageGetPathsDataResultDto";
import TopPageGetPropsDataResultDto from "src/applications/dto/TopPageGetPropsDataResultDto";
import ArticleService from 'src/applications/shared/ArticleService'
import CategoryService from "src/applications/shared/CategoryService";
import ArticleList from "src/domain/article/ArticleList";
import ResolvedArticleList from "src/domain/article/ResolvedArticleList";
import CategoryList from "src/domain/category/CategoryList";
import {container, injectable} from "tsyringe";

const articleService = container.resolve(ArticleService);
const categoryService = container.resolve(CategoryService);

@injectable()
class TopPageService {

    getPropsData = (pageNumber: number): TopPageGetPropsDataResultDto => {

        const offset = (pageNumber - 1) * process.env.ARTICLE_PER_PAGE;
        const limit = pageNumber * process.env.ARTICLE_PER_PAGE;

        const articleList: ArticleList =
            articleService.getArticles();

        const categoryList: CategoryList = categoryService.getCategoryList();

        const totalArticleNumber: number =
            articleList
                .getPublishedArticles()
                .articleNumber;

        const resolvedArticleList: ResolvedArticleList =
            articleList
                .getPublishedArticles()
                .sortArticlesByCreateDateTime()
                .getArticlesByOffsetLimit(offset, limit)
                .resolve(categoryList);

        return TopPageGetPropsDataResultDto.of(
            resolvedArticleList,
            totalArticleNumber);
    }

    getPathsData = (): TopPageGetPathsDataResultDto => {
        const articleList: ArticleList =
            articleService.getArticles();

        const totalArticleNumber: number =
            articleList
                .getPublishedArticles()
                .articleNumber;

        return TopPageGetPathsDataResultDto.of(
            totalArticleNumber);
    }
}
export default TopPageService;