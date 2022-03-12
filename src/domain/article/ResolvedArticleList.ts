import ResolvedArticle from "src/domain/article/ResolvedArticle";

class ResolvedArticleList {

    constructor(
        private _articles: ResolvedArticle[]) {}

    public static of(
        resolvedArticle: ResolvedArticle[]): ResolvedArticleList {

        return new ResolvedArticleList(resolvedArticle);
    }

    get articles() {
        return this._articles;
    }

}
export default ResolvedArticleList;