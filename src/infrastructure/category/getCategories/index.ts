import {parse} from "csv-parse/sync";
import fs from "node:fs";

export function getCategories(): {id: string, name: string}[] {
    const categories =
        fs.readFileSync('docs/categories/index.csv');

    return parse(
        categories,
        {
            columns: true,
            comment: "#",
            skipEmptyLines: true
        });
}
