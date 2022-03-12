import Category from "src/domain/category/Category";

class CategoryList {

    private constructor(
        private _categories: Category[]) {
    }

    public static of(categories: Category[]): CategoryList {
        return new CategoryList(categories);
    }

    get categories(): Category[] {
        return this._categories;
    }

    public getCategoryNameById(categoryId: string): string {
        const category: Category | undefined =
            this._categories.find(category => category.id === categoryId);

        if (category) {
            return category.name;
        } else {
            throw new Error("指定されたカテゴリIDに紐づくカテゴリ情報が存在しません。");
        }
    }
}

export default CategoryList;