import React from 'react';
import TopPageController from "src/presentation/controller/TopPageController";
import {TopPageProps} from "src/presentation/props/TopPageProps";
import PageSeo from "src/presentation/ui/components/organisms/PageSeo";
import TopPage from "src/presentation/ui/components/organisms/TopPage";
import CommonTemplate from "src/presentation/ui/components/templates/CommonTemplate";
import {container} from "tsyringe";

const topPageController = container.resolve(TopPageController);

export const getStaticProps = async () => {

    const topPageProps: TopPageProps =
        topPageController.getProps(1);

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
