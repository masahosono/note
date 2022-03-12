import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "node:querystring";
import React from 'react';
import CategoryPageController from "src/presentation/controller/CategoryPageController";
import {CategoryPagePaths} from "src/presentation/paths/CategoryPagePaths";
import {CategoryPageProps} from "src/presentation/props/CategoryPageProps";
import CategoryPage from "src/presentation/ui/components/organisms/CategoryPage";
import PageSeo from "src/presentation/ui/components/organisms/PageSeo";
import CommonTemplate from "src/presentation/ui/components/templates/CommonTemplate";
import {container} from "tsyringe";

interface Params extends ParsedUrlQuery {
    id: string
}

const categoryPageController = container.resolve(CategoryPageController);

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const categoryPagePaths: CategoryPagePaths[] =
        categoryPageController.getPaths();

    return {
        paths: categoryPagePaths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<CategoryPageProps, Params> = async ({params}) => {

    const categoryPageProps: CategoryPageProps =
        categoryPageController.getProps(params!.id);

    return {
        props: {...categoryPageProps}
    }
}

const Index = (props: CategoryPageProps) => {
    return (
        <CommonTemplate>
            <PageSeo {...props.pageSeo} />
            <CategoryPage {...props} />
        </CommonTemplate>
    );
}

export default Index;
