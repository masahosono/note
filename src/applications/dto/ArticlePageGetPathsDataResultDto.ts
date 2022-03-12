import ArticleList from "src/domain/article/ArticleList";

class ArticlePageGetPathsDataResultDto {

    private constructor(
        private _articles: ArticleList) {}

    public static of(
        articles: ArticleList): ArticlePageGetPathsDataResultDto {

        return new ArticlePageGetPathsDataResultDto(articles);
    }

    get artticles() {
        return this._articles;
    }
}
export default ArticlePageGetPathsDataResultDto;