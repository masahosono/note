import ArticlePageService from "src/applications/ArticlePageService";
import ArticlePageGetPathsDataResultDto from "src/applications/dto/ArticlePageGetPathsDataResultDto";
import ArticlePageGetPropsDataResultDto from "src/applications/dto/ArticlePageGetPropsDataResultDto";
import {ArticlePagePaths} from "src/presentation/paths/ArticlePagePaths";
import ArticlePagePathsFactory from "src/presentation/paths/factory/ArticlePagePathsFactory";
import {ArticlePageProps} from "src/presentation/props/ArticlePageProps";
import ArticlePagePropsFactory from "src/presentation/props/factory/ArticlePagePropsFactory";
import {container, injectable} from "tsyringe";

const articlePageService = container.resolve(ArticlePageService);
const articlePagePropsFactory = container.resolve(ArticlePagePropsFactory);
const articlePagePathsFactory = container.resolve(ArticlePagePathsFactory);

@injectable()
class ArticlePageController {

    getProps = (articleId: string): ArticlePageProps => {
        const articlePageResultDto: ArticlePageGetPropsDataResultDto =
            articlePageService.getPropsData(articleId);

        return articlePagePropsFactory.factory(
            articlePageResultDto);
    }

    getPaths = (): ArticlePagePaths[] => {
        const articlePageGetArticlesResultDto: ArticlePageGetPathsDataResultDto =
            articlePageService.getPathsData();

        return articlePagePathsFactory.factory(
            articlePageGetArticlesResultDto);
    }
}
export default ArticlePageController;