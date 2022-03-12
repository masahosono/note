import ResolvedArticle from "src/domain/article/ResolvedArticle";

class ArticlePageGetPropsDataResultDto {

    constructor(
        private _article: ResolvedArticle) {}

    public static of(
        article: ResolvedArticle): ArticlePageGetPropsDataResultDto {

        return new ArticlePageGetPropsDataResultDto(article);
    }

    get artticle() {
        return this._article;
    }
}
export default ArticlePageGetPropsDataResultDto;