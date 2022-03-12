import {ArticleProps} from "src/presentation/props/ArticleProps";
import {PageSeoProps} from "src/presentation/props/PageSeoProps";

export interface CategoryPageProps {
    articles: ArticleProps[];
    categoryId: string;
    categoryName: string;
    pageSeo: PageSeoProps
}