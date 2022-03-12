import React from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import TopPageController from "src/presentation/controller/TopPageController";
import {TopPagePaths} from "src/presentation/paths/TopPagePaths";
import {TopPageProps} from "src/presentation/props/TopPageProps";
import PageSeo from "src/presentation/ui/components/organisms/PageSeo";
import TopPage from "src/presentation/ui/components/organisms/TopPage";
import CommonTemplate from "src/presentation/ui/components/templates/CommonTemplate";

import {container} from "tsyringe";
import {ParsedUrlQuery} from "node:querystring";

const topPageController = container.resolve(TopPageController);

interface Params extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const topPagePaths: TopPagePaths[] =
        topPageController.getPaths();

    return {
        paths: topPagePaths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<TopPageProps, Params> = async ({params}) => {

    const topPageProps: TopPageProps =
        topPageController.getProps(parseInt(params!.id));

    return {
        props: {...topPageProps}
    }
}

const Index = (props: TopPageProps) => {
    return (
        <CommonTemplate>
            <PageSeo {...props.pageSeo} />
            <TopPage {...props} />
        </CommonTemplate>
    );
}

export default Index;
