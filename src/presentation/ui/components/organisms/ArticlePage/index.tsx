import highlight from 'highlightjs'
import {marked, Renderer} from 'marked'
import moment from 'moment'
import Link from "next/link";
import React, {useEffect} from 'react'
import {ArticlePageProps} from "src/presentation/props/ArticlePageProps";
import styled from 'styled-components'

const Article = styled.div`
    width: 100%;
`

const ArticleInfo = styled.div`
    margin-bottom: 38px;
`

const Category = styled.span`
    font-size: 14px;
    color: #a5aaaf;
    :before {
        font-family: 'Font Awesome 5 Free';
        content: '\f07b';
        font-weight: 900;
        padding-right: 5px;
    }
`

const Title = styled.p`
    font-size: 32px;
    font-weight: bold;
    line-height: 1.4;
    margin: 15px 0 0;
`

const DateWrapper = styled.div`
    margin: 10px 0 0;
    display: flex;
    justify-content: flex-end;
`

const CreateDate = styled.span`
    font-size: 14px;
    color: #a5aaaf;
    padding: 0 10px 0 0;
    :before {
        font-family: 'Font Awesome 5 Free';
        content: '\f017';
        font-weight: 900;
        padding-right: 5px;
    }
`

const UpdateDate = styled.span`
    font-size: 14px;
    color: #a5aaaf;
    padding: 0 10px 0 0;
    :before {
        font-family: 'Font Awesome 5 Free';
        content: '\f021';
        font-weight: 900;
        padding-right: 5px;
    }
`

const Text = styled.div`
    margin: 15px 0 0;
    width: 100%;
    line-height: 1.7;
    
    a:link, a:visited, a:hover, a:active {
        color: #517d99;
    }

    pre {
        background-color: #2b2b2b;
        margin: 12px -20px 32px -20px;
        padding: 8px 12px 0 12px;
    }

    img {
        max-width: 100%;
    }

    ul {
        list-style-type: disc;
        padding-left: 24px;
        margin: 24px 0;
        line-height: 1.8;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 1.4em;
        margin-bottom: 1.2rem;
    }

    h1 {
        font-size: 28px;
        border-bottom: 1px solid #ddd;
    }

    h2 {
        font-size: 24px;
        border-bottom: 1px solid #ddd;
    }

    h3 {
        font-size: 20px;
    }
    
    p {
        margin-top: 1.25em;
        margin-bottom: 1.25em;
    }
`
const ArticlePage = (props: ArticlePageProps) => {

    useEffect(() => {
        window!.twttr!.widgets!.load();
    }, []);

    const renderer = new Renderer();
    renderer.image = (href: string | null, title: string | null, text: string) => {
        return `<img src=${require(`docs/articles/${props.article.slug}/${href}`)} alt=${text} />`;
    }

    const markedOptions = {
        breaks: true,
        highlight: (code: string, lang: string) => {
            return (
                '<code class="hljs">' + highlight.highlightAuto(code, [lang]).value + '</code>'
            );
        },
        renderer: renderer
    };

    const resolvedText =
        marked(props.article.text, markedOptions);

    return (
        <Article>
            <ArticleInfo>
                <Category>
                    <Link
                        href={{
                            pathname: '/category/' + props.article.categoryId
                        }} passHref>
                        {props.article.categoryName}
                    </Link>
                </Category>
                <Title>{props.article.title}</Title>
                <DateWrapper>
                    <div>
                        <CreateDate>
                            {moment(props.article.createDateTime).format(
                                'YYYY/MM/DD HH:mm'
                            )}
                        </CreateDate>
                        <UpdateDate>
                            {moment(props.article.createDateTime).format(
                                'YYYY/MM/DD HH:mm'
                            )}
                        </UpdateDate>
                    </div>
                </DateWrapper>
            </ArticleInfo>
            <Text
                dangerouslySetInnerHTML={{__html: resolvedText}}
            />
        </Article>
    )
}

export default ArticlePage
