import ResolvedArticle from "src/domain/article/ResolvedArticle";
import CategoryList from "src/domain/category/CategoryList";

class Article {

    private constructor(
        private _id: string,
        private _title: string,
        private _categoryId: string,
        private _createDateTime: string,
        private _updateDateTime: string,
        private _description: string,
        private _thumbnail: string,
        private _slug: string,
        private _text: string,
        private _published: boolean
        ) {}

    public static of(
        id: string,
        title: string,
        categoryId: string,
        createDateTime: string,
        updateDateTime: string,
        description: string,
        thumbnail: string,
        slug: string,
        text: string,
        published: boolean): Article {

        return new Article(
            id,
            title,
            categoryId,
            createDateTime,
            updateDateTime,
            description,
            thumbnail,
            slug,
            text,
            published);
    }

    public resolve (categoryList: CategoryList): ResolvedArticle {
        return ResolvedArticle.of(
            this._id,
            this._title,
            this._categoryId,
            categoryList.getCategoryNameById(this._categoryId),
            this._createDateTime,
            this._updateDateTime,
            this._description,
            this._thumbnail,
            this._slug,
            this._text
        );
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get categoryId() {
        return this._categoryId;
    }

    get createDateTime() {
        return this._createDateTime;
    }

    get updateDateTime() {
        return this._updateDateTime;
    }

    get description() {
        return this._description;
    }

    get thumbnail() {
        return this._thumbnail;
    }

    get slug() {
        return this._slug;
    }

    get text() {
        return this._text;
    }

    get published() {
        return this._published;
    }
}
export default Article;