import TopPageGetPathsDataResultDto from "src/applications/dto/TopPageGetPathsDataResultDto";
import {TopPagePaths} from "src/presentation/paths/TopPagePaths";
import {injectable} from "tsyringe";

@injectable()
class TopPagePathsFactory {

    factory = (topPageGetPathsDataResultDto: TopPageGetPathsDataResultDto): TopPagePaths[] => {

        const totalArticleNumber: number
            = topPageGetPathsDataResultDto.totalArticleNumber;

        const endOfPageNumber: number
            = Math.ceil(totalArticleNumber / process.env.ARTICLE_PER_PAGE);

        const list = [];
        for (let pageNumber = 1; pageNumber <= endOfPageNumber; pageNumber++) {
            list.push({
                params: {
                    id: pageNumber.toString(10)
                }
            });
        }

        return list;
    }
}

export default TopPagePathsFactory;