import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import {GetArticlesResponse} from "src/infrastructure/article/getArticles/response";

export function getArticles(): GetArticlesResponse {

    const dirNames = fs.readdirSync('docs/articles/');

    const articles = dirNames.map((dirName) => {
        const markdownPath =
            path.join('docs/articles/', dirName, "index.md");

        return {
            matterResult: matter(
                fs.readFileSync(markdownPath, 'utf8')),
            slug: dirName
        };
    });

    return {
        articles: articles
    }
}
