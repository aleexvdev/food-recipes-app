import { Link } from "react-router-dom";
import { ItemCategoryProps } from "../../../types/types"
import { TypeButton } from "../../../types/typesComponents";
import { ButtonFood } from "../Button/ButtonFood";
import { useState } from "react";

export const ItemCategory = ({ id, category, image }: ItemCategoryProps) => {

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const btnprops: TypeButton = {
    onclick: () => console.log('object'),
    text: category,
    type: "button",
    class: `bg-green-600 text-white px-3 py-1 rounded-xl hover:bg-green-700 flex items-center justify-center text-lg lg:text-xl md:text-xl 2xl:text-xl cursor-pointer ${isHovered ? 'block' : 'hidden'}`
  }

  return (
    <article 
      key={id} 
      className="w-full 2xl:w-[33.33%] lg:w-[33.33%] md:w-[33.33%] h-[250px] 2xl:h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            src={`/assets/images/${image}.jpeg`}
            alt={category}
            title={category}
            className="w-full object-cover h-full relative"
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