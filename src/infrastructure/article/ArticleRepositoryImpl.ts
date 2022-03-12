import ArticleList from "src/domain/article/ArticleList";
import ArticleRepository from "src/domain/article/ArticleRepository";
import ArticleListFactory from "src/infrastructure/article/getArticles/factory/ArticleListFactory";
import {GetArticlesResponse} from "src/infrastructure/article/getArticles/response";
import {container} from "tsyringe";
import {getArticles} from "./getArticles";

const articleListFactory = container.resolve(ArticleListFactory);

class ArticleRepositoryImpl implements ArticleRepository {

    getArticles = (): ArticleList => {
        const articlesResponse: GetArticlesResponse = getArticles();

        return articleListFactory.from(
            articlesResponse);
    }
}

export default ArticleRepositoryImpl;
