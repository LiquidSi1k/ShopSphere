import categories from "../../json/main-data";
import CategoryItem from "../categories-item/category-item";

const Directory = () => {
  return (
    <section className="flex flex-wrap gap-6 w-full justify-around p-5">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </section>
  );
};

export default Directory;
