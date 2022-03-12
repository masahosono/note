import {GrayMatterFile} from "gray-matter";

export interface GetArticlesResponse {
    articles: GetArticleResponse[];
}

export interface GetArticleResponse {
    matterResult: GrayMatterFile<string>;
    slug: string;
}