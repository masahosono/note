import CategoryPageGetPathsDataResultDto from "src/applications/dto/CategoryPageGetPathsDataResultDto";
import CategoryPageGetPropsDataResultDto from "src/applications/dto/CategoryPageGetPropsDataResultDto";
import ArticleService from 'src/applications/shared/ArticleService'
import CategoryService from "src/applications/shared/CategoryService";
import ArticleList from "src/domain/article/ArticleList";
import ResolvedArticleList from "src/domain/article/ResolvedArticleList";
import CategoryList from "src/domain/category/CategoryList";
import {container, injectable} from "tsyringe";

const articleService = container.resolve(ArticleService);
const categoryService = container.resolve(CategoryService);

@injectable()
class CategoryPageService {

    getPropsData = (categoryId: string): CategoryPageGetPropsDataResultDto => {

        const articleList: ArticleList =
            articleService.getArticles();

        const categoryList: CategoryList =
            categoryService.getCategoryList();

        const categoryName =
            categoryList.getCategoryNameById(categoryId);

        const resolvedArticleList: ResolvedArticleList =
            articleList
                .getPublishedArticles()
                .getArtclesByCategoryId(categoryId)
                .sortArticlesByCreateDateTime()
                .resolve(categoryList);

        return CategoryPageGetPropsDataResultDto.of(
            resolvedArticleList,
            categoryId,
            categoryName);
    }

    getPathsData = (): CategoryPageGetPathsDataResultDto => {

        const categoryList: CategoryList = categoryService.getCategoryList();

        return CategoryPageGetPathsDataResultDto.of(
            categoryList);
    }
}

export default CategoryPageService;