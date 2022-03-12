import CategoryPageGetPathsDataResultDto from "src/applications/dto/CategoryPageGetPathsDataResultDto";
import CategoryList from "src/domain/category/CategoryList";
import {CategoryPagePaths} from "src/presentation/paths/CategoryPagePaths";
import {injectable} from "tsyringe";

@injectable()
class CategoryPagePathsFactory {

    factory = (categoryPageGetPathsDataResultDto: CategoryPageGetPathsDataResultDto): CategoryPagePaths[] => {

        const categoryList: CategoryList
            = categoryPageGetPathsDataResultDto.categories;

        return categoryList.categories
            .map(category => {
                return {
                    params: {
                        id: category.id
                    }
                }
            })
    }
}

export default CategoryPagePathsFactory;