import Article from "src/domain/article/Article";
import ResolvedArticleList from "src/domain/article/ResolvedArticleList";
import CategoryList from "src/domain/category/CategoryList";

class ArticleList {

    private constructor(
        private _articles: Article[]) {}

    public static of(articles: Article[]): ArticleList {
        return new ArticleList(articles);
    }

    get articles(): Article[] {
        return this._articles;
    }

    public resolve (
        categoryList: CategoryList): ResolvedArticleList {

        return ResolvedArticleList.of(
            this._articles.map(article => {
                return article.resolve(categoryList)
            })
        );
    }

    public getArticleById(articleId: string): Article {
        const article: Article | undefined =
            this._articles.find(article => article.id == articleId);

        if (article) {
            return article;
        } else {
            throw new Error("指定された記事IDに紐づく記事情報が存在しません");
        }
    }

    public getPublishedArticles(): ArticleList {
        return ArticleList.of(
            this._articles.filter(article => article.published));
    }

    public getArtclesByCategoryId(categoryId: string): ArticleList {
        return ArticleList.of(
            this._articles
                .filter(article => article.categoryId == categoryId));
    }

    public getArticlesByOffsetLimit(offset: number, limit: number): ArticleList{
        return ArticleList.of(
            this._articles
                .slice(offset, limit));
    }

    public sortArticlesByCreateDateTime(): ArticleList {
        return ArticleList.of(
            this._articles
                .sort((a, b) => {
                    if (a.createDateTime < b.createDateTime) {
                        return 1;
                    } else {
                        return -1;
                    }
                }));
    }

    get articleNumber(): number {
        return this._articles.length;
    }
}

export default ArticleList;