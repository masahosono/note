import CategoryList from "src/domain/category/CategoryList";
import CategoryRepository from "src/domain/category/CategoryRepository";
import CategoryListFactory from "src/infrastructure/category/getCategories/factory/CategoryListFactory";
import {container} from "tsyringe";
import {getCategories} from "./getCategories";

const categoryListFactory = container.resolve(CategoryListFactory);

class CategoryRepositoryImpl implements CategoryRepository {

    getCategories = (): CategoryList => {
        const categoriesResponse: {id: string, name: string}[] = getCategories();
        return categoryListFactory.from(categoriesResponse);
    }
}

export default CategoryRepositoryImpl;
