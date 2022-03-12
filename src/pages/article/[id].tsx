import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "node:querystring";
import React from 'react';
import ArticlePageController from "src/presentation/controller/ArticlePageController";
import {ArticlePagePaths} from "src/presentation/paths/ArticlePagePaths";
import {ArticlePageProps} from "src/presentation/props/ArticlePageProps";
import ArticlePage from "src/presentation/ui/components/organisms/ArticlePage";
import PageSeo from "src/presentation/ui/components/organisms/PageSeo";
import CommonTemplate from "src/presentation/ui/components/templates/CommonTemplate";
import {container} from "tsyringe";

interface Params extends ParsedUrlQuery {
    id: string
}

const articlePageController = container.resolve(ArticlePageController);

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const articlePagePaths: ArticlePagePaths[] =
        articlePageController.getPaths();

    return {
        paths: articlePagePaths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ArticlePageProps, Params> = async ({params}) => {

    const articlePageProps: ArticlePageProps =
        articlePageController.getProps(params!.id);

    return {
        props: {...articlePageProps}
    }
}

const Index = (props: ArticlePageProps) => {
    return (
        <CommonTemplate>
            <PageSeo {...props.pageSeo} />
            <ArticlePage {...props} />
        </CommonTemplate>
    );
}

export default Index;
