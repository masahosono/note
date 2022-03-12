class ResolvedArticle {

    private constructor(
        private _id: string,
        private _title: string,
        private _categoryId: string,
        private _categoryName: string,
        private _createDateTime: string,
        private _updateDateTime: string,
        private _description: string,
        private _thumbnail: string,
        private _slug: string,
        private _text: string) {}

    public static of(
        id: string,
        title: string,
        categoryId: string,
        categoryName: string,
        createDateTime: string,
        updateDateTime: string,
        description: string,
        thumbnail: string,
        slug: string,
        text: string): ResolvedArticle {

        return new ResolvedArticle(
            id,
            title,
            categoryId,
            categoryName,
            createDateTime,
            updateDateTime,
            description,
            thumbnail,
            slug,
            text);
    }

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get categoryId(): string {
        return this._categoryId;
    }

    get categoryName(): string {
        return this._categoryName;
    }

    get createDateTime(): string {
        return this._createDateTime;
    }

    get updateDateTime(): string {
        return this._updateDateTime;
    }

    get description(): string {
        return this._description;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }

    get slug(): string {
        return this._slug;
    }

    get text(): string {
        return this._text;
    }
}
export default ResolvedArticle;