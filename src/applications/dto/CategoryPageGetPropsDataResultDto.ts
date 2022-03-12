import ResolvedArticleList from "src/domain/article/ResolvedArticleList";

class CategoryPageGetPropsDataResultDto {

    constructor(
        private _articleList: ResolvedArticleList,
        private _categoryId: string,
        private _categoryName: string) {
    }

    public static of(
        articleList: ResolvedArticleList,
        categoryId: string,
        categoryName: string): CategoryPageGetPropsDataResultDto {

        return new CategoryPageGetPropsDataResultDto(
            articleList,
            categoryId,
            categoryName);
    }

    get articleList() {
        return this._articleList;
    }

    get categoryId() {
        return this._categoryId;
    }

    get categoryName() {
        return this._categoryName;
    }
}
export default CategoryPageGetPropsDataResultDto;