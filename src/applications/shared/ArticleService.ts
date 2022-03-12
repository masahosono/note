import ArticleList from "src/domain/article/ArticleList";
import ArticleRepository from "src/domain/article/ArticleRepository";
import ArticleRepositoryImpl from "src/infrastructure/article/ArticleRepositoryImpl";
import {container, inject, injectable} from "tsyringe";

container.register('ArticleRepository', {
    useClass: ArticleRepositoryImpl
})

@injectable()
class ArticleService {

    constructor(
        @inject("ArticleRepository")
        private articleRepository: ArticleRepository
    ) {}

    public getArticles = (): ArticleList => {
        return this.articleRepository.getArticles();
    }

}

export default ArticleService;