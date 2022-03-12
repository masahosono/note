import CategoryList from "src/domain/category/CategoryList";

interface CategoryRepository {

    getCategories(): CategoryList

}
export default CategoryRepository;