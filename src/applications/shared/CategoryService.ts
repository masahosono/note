import CategoryList from "src/domain/category/CategoryList";
import CategoryRepository from "src/domain/category/CategoryRepository";
import CategoryRepositoryImpl from "src/infrastructure/category/CategoryRepositoryImpl";
import {container, inject, injectable} from "tsyringe";

container.register('CategoryRepository', {
    useClass: CategoryRepositoryImpl
})

@injectable()
class CategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: CategoryRepository
    ) {}

    public getCategoryList = (): CategoryList => {
        return this.categoryRepository.getCategories();
    }
}

export default CategoryService;