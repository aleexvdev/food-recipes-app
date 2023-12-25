import { Link } from "react-router-dom";
import { ItemCategoryProps } from "../../../types/types"
import { TypeButton } from "../../../types/typesComponents";
import { ButtonFood } from "../Button/ButtonFood";

export const ItemCategory = ({ id, category, image }: ItemCategoryProps) => {

  const btnprops: TypeButton = {
    onclick: () => console.log('object'),
    text: category,
    type: "button",
    class: "bg-orange-500 px-4 py-1 text-xl rounded-xl hover:bg-orange-700 flex items-center justify-center"
  }

  return (
    <article key={id} className="w-[200px] h-[200px] bg-orange-500/20 rounded-3xl relative hover:shadow-lg hover:shadow-orange-500">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            src={`/assets/images/${image}.jpeg`}
            alt={category}
            title={category}
            className="w-full h-full object-cover rounded-3xl relative"
          />
        </div>
        <div className="w-full flex items-center justify-center absolute">
          <Link to={'/recipes'}>
            <ButtonFood props={btnprops} />
          </Link>
        </div>
      </div>
    </article>
  );
}
