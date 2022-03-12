import path from "node:path";
import CategoryPageGetPropsDataResultDto from "src/applications/dto/CategoryPageGetPropsDataResultDto";
import ResolvedArticleList from "src/domain/article/ResolvedArticleList";
import {CategoryPageProps} from "src/presentation/props/CategoryPageProps";
import {injectable} from "tsyringe";


@injectable()
class CategoryPagePropsFactory {

    factory = (categoryPageGetPropsDataResultDto: CategoryPageGetPropsDataResultDto): CategoryPageProps  => {

        const articleList: ResolvedArticleList =
            categoryPageGetPropsDataResultDto.articleList;

        const categoryId: string =
            categoryPageGetPropsDataResultDto.categoryId;

        const categoryName: string =
            categoryPageGetPropsDataResultDto.categoryName;

        return {
            articles:
                articleList.articles
                    .map(article => {
                        return {
                            id: article.id,
                            title: article.title,
                            categoryId: article.categoryId,
                            categoryName: article.categoryName,
                            createDateTime: article.createDateTime,
                            updateDateTime: article.updateDateTime,
                            description: article.description,
                            thumbnail: article.thumbnail,
                            slug: article.slug,
                            text: article.text
                        }
                    }),
            categoryId: categoryId,
            categoryName: categoryName,
            pageSeo: {
                title: `${categoryName} | ${process.env.SITE_NAME}`,
                description: `${categoryName} | ${process.env.SITE_DEFAULT_DESCRIPTION}`,
                isRobotsPage: true,
            }
        };
    }
}
export default CategoryPagePropsFactory;