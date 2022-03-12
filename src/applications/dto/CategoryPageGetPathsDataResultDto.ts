import CategoryList from "src/domain/category/CategoryList";

class CategoryPageGetPathsDataResultDto {

    private constructor(
        private _categories: CategoryList) {}

    public static of(
        categories: CategoryList): CategoryPageGetPathsDataResultDto {

        return new CategoryPageGetPathsDataResultDto(categories);
    }

    get categories(): CategoryList {
        return this._categories;
    }
}
export default CategoryPageGetPathsDataResultDto;