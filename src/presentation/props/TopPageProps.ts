import {ArticleProps} from "src/presentation/props/ArticleProps";
import {PageSeoProps} from "src/presentation/props/PageSeoProps";

export interface TopPageProps {
    articles: ArticleProps[]
    pageSeo: PageSeoProps;
    totalArticleNumber: number;
    currentPageNumber: number;
}
