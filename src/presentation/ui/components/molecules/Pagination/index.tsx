import React from 'react'
import Link from 'next/link'
import styled from "styled-components";

const PaginationWrapper = styled.div`
  text-align: center;
`

const PaginationLink = styled.a`
  display: inline-block;
  text-align: center;
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  &.active {
    background-color: #517d99;
    color: white;
  }
`

interface Props {
    currentPageNumber: number,
    totalArticleNumber: number
}

const Pagination = ({currentPageNumber, totalArticleNumber}: Props) => {
    const PER_PAGE = process.env.ARTICLE_PER_PAGE;

    const range = (start: number, end: number) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

    return (
        <PaginationWrapper>
            {range(1, Math.ceil(totalArticleNumber / PER_PAGE)).map((number) => (
                <Link key={number} href={`/page/${number}`} passHref>
                    <PaginationLink className={currentPageNumber === number ? "active" : ""}>
                        {number}
                    </PaginationLink>
                </Link>
            ))}
        </PaginationWrapper>
    );
}

export default Pagination;
