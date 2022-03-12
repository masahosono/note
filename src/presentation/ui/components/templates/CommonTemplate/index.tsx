import React from 'react'
import styled from 'styled-components'

interface Props {}

const CommonWrapper = styled.div`
    position: relative;
    min-height: 100vh;
`

const Main = styled.main`
    padding-top: 30px;
    background-color: #ffffff;
    max-width: 1177px;
    margin: auto;
    padding-bottom: 70px;
`

const HomeLink = styled.a`
    font-size: 24px;
    text-decoration: none;
    color: black;
    :before {
        font-family: 'Font Awesome 5 Free';
        content: '\f015';
        font-weight: 700;
    }
`

const ContentWrapper = styled.div`
    margin: 0px 20px 0px 20px;
`

const CommonTemplate: React.FC<Props> = ({ children }): React.ReactElement => (
    <CommonWrapper>
        <HomeLink href="/"/>
        <Main>
            <ContentWrapper>{children}</ContentWrapper>
        </Main>
    </CommonWrapper>
)
export default CommonTemplate
