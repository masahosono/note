import ArticlePageGetPathsDataResultDto from "src/applications/dto/ArticlePageGetPathsDataResultDto";
import ArticleList from "src/domain/article/ArticleList";
import {ArticlePagePaths} from "src/presentation/paths/ArticlePagePaths";
import {injectable} from "tsyringe";

@injectable()
class ArticlePagePathsFactory {

    factory = (articlePageGetArticlesResultDto: ArticlePageGetPathsDataResultDto): ArticlePagePaths[] => {

        const articleList: ArticleList
            = articlePageGetArticlesResultDto.artticles;

        return articleList.articles
            .map(article => {
                return {
                    params: {
                        id: article.id
                    }
                }
            })
    }
}

export default ArticlePagePathsFactory;