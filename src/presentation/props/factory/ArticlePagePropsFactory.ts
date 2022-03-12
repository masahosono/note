import path from "node:path";
import ArticlePageGetPropsDataResultDto from "src/applications/dto/ArticlePageGetPropsDataResultDto";
import {ArticlePageProps} from "src/presentation/props/ArticlePageProps";
import {injectable} from "tsyringe";

@injectable()
class ArticlePagePropsFactory {

    factory = (articlePageResultDto: ArticlePageGetPropsDataResultDto): ArticlePageProps => {

        const article = articlePageResultDto.artticle;

        return {
            article: {
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
            },
            pageSeo: {
                title: `${article.title} | ${process.env.SITE_NAME}`,
                description: article.description || process.env.SITE_DEFAULT_DESCRIPTION,
                updateDateTime: article.updateDateTime
            }
        };
    }
}

export default ArticlePagePropsFactory;