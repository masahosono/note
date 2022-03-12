class TopPageGetPathsDataResultDto {

    private constructor(
        private _totalArticleNumber: number) {}

    public static of(
        totalArticleNumber: number): TopPageGetPathsDataResultDto {

        return new TopPageGetPathsDataResultDto(totalArticleNumber);
    }

    get totalArticleNumber() {
        return this._totalArticleNumber;
    }
}
export default TopPageGetPathsDataResultDto;