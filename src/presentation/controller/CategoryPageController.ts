import CategoryPageService from "src/applications/CateogryPageService";
import CategoryPageGetPathsDataResultDto from "src/applications/dto/CategoryPageGetPathsDataResultDto";
import CategoryPageGetPropsDataResultDto from "src/applications/dto/CategoryPageGetPropsDataResultDto";
import {CategoryPagePaths} from "src/presentation/paths/CategoryPagePaths";
import CategoryPagePathsFactory from "src/presentation/paths/factory/CategoryPagePathsFactory";
import {CategoryPageProps} from "src/presentation/props/CategoryPageProps";
import CategoryPagePropsFactory from "src/presentation/props/factory/CategoryPagePropsFactory";
import {container, injectable} from "tsyringe";

const categoryPageService = container.resolve(CategoryPageService);
const categoryPagePropsFactory = container.resolve(CategoryPagePropsFactory);
const categoryPagePathsFactory = container.resolve(CategoryPagePathsFactory);

@injectable()
class CategoryPageController {

    getProps = (categoryId: string): CategoryPageProps => {
        const categoryPageGetPropsDataResultDto: CategoryPageGetPropsDataResultDto =
            categoryPageService.getPropsData(categoryId);

        return categoryPagePropsFactory.factory(
            categoryPageGetPropsDataResultDto);
    }

    getPaths = (): CategoryPagePaths[] => {
        const categoryPageGetPathsDataResultDto: CategoryPageGetPathsDataResultDto =
            categoryPageService.getPathsData();

        return categoryPagePathsFactory.factory(
            categoryPageGetPathsDataResultDto);
    }
}
export default CategoryPageController;