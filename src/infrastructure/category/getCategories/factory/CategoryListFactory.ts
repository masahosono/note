import Category from "src/domain/category/Category";
import CategoryList from "src/domain/category/CategoryList";
import {injectable} from "tsyringe";

@injectable()
class CategoryListFactory {
    from = (categoriesResponse: {id: string, name: string}[]): CategoryList => {
        return CategoryList.of(
            categoriesResponse.map(category => {
                return Category.of(
                    category.id,
                    category.name)
            })
        );
    }
}

export default CategoryListFactory;