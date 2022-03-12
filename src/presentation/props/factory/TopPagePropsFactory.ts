import path from "node:path";
import TopPageGetPropsDataResultDto from "src/applications/dto/TopPageGetPropsDataResultDto";
import ResolvedArticleList from "src/domain/article/ResolvedArticleList";
import {TopPageProps} from "src/presentation/props/TopPageProps";
import {injectable} from "tsyringe";

@injectable()
class TopPagePropsFactory {

    factory = (
        topPageResultDto: TopPageGetPropsDataResultDto,
        pageNumber: number): TopPageProps  => {
        
        const articleList: ResolvedArticleList = topPageResultDto.articleList;

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
            totalArticleNumber: topPageResultDto.totalArticleNumber,
            currentPageNumber: pageNumber,
            pageSeo: {
                title: process.env.SITE_NAME,
                description: process.env.SITE_DEFAULT_DESCRIPTION
            }
        };
    }
}
export default TopPagePropsFactory;