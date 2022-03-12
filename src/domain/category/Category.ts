class Category {

    private constructor(
        private _id: string,
        private _name: string) {}

    public static of(
        id: string,
        name: string): Category {

        return new Category(id, name);
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
}
export default Category;