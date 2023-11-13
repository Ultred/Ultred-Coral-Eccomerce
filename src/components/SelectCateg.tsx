import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../service/Allfetch";

interface SelectCategProps {
  onSelectCategory: (category: string) => void;
}

const SelectCateg: React.FC<SelectCategProps> = ({ onSelectCategory }) => {
  const { data } = useQuery({
    queryKey: ["Categories"],
    queryFn: fetchCategories,
  });

  return (
    <select
      className="font-OpenSans text-lg p-4 border-2 border-colorblue cursor-pointer rounded-md my-10 uppercase outline-none"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="allProduct">All Products</option>
      {data?.map((category: string, index: number) => (
        <option className="my-7" key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SelectCateg;
