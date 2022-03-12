import {CategoryPageProps} from "src/presentation/props/CategoryPageProps";
import styled from 'styled-components'
import Link from 'next/link'
import moment from 'moment'

const ArticleWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

const Article = styled.div`
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        color: #87cefa;
    }
`

const ArticleInfo = styled.div`
    display: flex;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const CreateDate = styled.time`
    font-size: 14px;
    color: #a5aaaf;
    padding-left:10px;
    :before {
        font-family: 'Font Awesome 5 Free';
        content: '\f017';
        font-weight: 900;
        padding-right: 5px;
    }
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

const CategoryPage = (props: CategoryPageProps) => {

    return (
        <ArticleWrapper>
            {props.articles?.map((data, index) => {
                return (
                    <Link key={index} href={'/article/' + data.id} passHref>
                        <Article>
                            <Title>{data.title}</Title>
                            <ArticleInfo>
                                <Category>{data.categoryName}</Category>
                                <CreateDate>
                                    {moment(data.createDateTime).format(
                                        'YYYY/MM/DD HH:mm'
                                    )}
                                </CreateDate>
                            </ArticleInfo>
                        </Article>
                    </Link>
                )
            })}
        </ArticleWrapper>
    );
}
export default CategoryPage;