import TopPageGetPathsDataResultDto from "src/applications/dto/TopPageGetPathsDataResultDto";
import TopPageGetPropsDataResultDto from "src/applications/dto/TopPageGetPropsDataResultDto";
import TopPageService from "src/applications/TopPageService";
import TopPagePathsFactory from "src/presentation/paths/factory/TopPagePathsFactory";
import {TopPagePaths} from "src/presentation/paths/TopPagePaths";
import TopPagePropsFactory from "src/presentation/props/factory/TopPagePropsFactory";
import {TopPageProps} from "src/presentation/props/TopPageProps";
import {container, injectable} from "tsyringe";

const topPageService = container.resolve(TopPageService);
const topPagePropsFactory = container.resolve(TopPagePropsFactory);
const topPagePathsFactory = container.resolve(TopPagePathsFactory);

@injectable()
class TopPageController {

    getProps = (pageNumber: number): TopPageProps => {
        const topPageResultDto: TopPageGetPropsDataResultDto =
            topPageService.getPropsData(pageNumber);

        return topPagePropsFactory.factory(
            topPageResultDto,
            pageNumber);
    }

    getPaths = (): TopPagePaths[] => {
        const topPageGetPathsDataResultDto: TopPageGetPathsDataResultDto =
            topPageService.getPathsData();

        return topPagePathsFactory.factory(
            topPageGetPathsDataResultDto);
    }

}
export default TopPageController;