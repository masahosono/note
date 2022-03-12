import ResolvedArticleList from "src/domain/article/ResolvedArticleList";

class TopPageGetPropsDataResultDto {

    constructor(
        private _articleList: ResolvedArticleList,
        private _totalArticleNumber: number) {
    }

    public static of(
        articleList: ResolvedArticleList,
        totalArticleNumber: number): TopPageGetPropsDataResultDto {

        return new TopPageGetPropsDataResultDto(articleList, totalArticleNumber);
    }

    get articleList() {
        return this._articleList;
    }

    get totalArticleNumber() {
        return this._totalArticleNumber;
    }
}
export default TopPageGetPropsDataResultDto;