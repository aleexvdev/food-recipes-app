import { Hits } from "../../../types/types";

type ItemCardProps = {
  id: string | number; 
  props: Hits;
}

export const CardRecipeView = ({ id, props }: ItemCardProps) => {

  const { recipe } = props;
  

  return (
    <article 
      key={id} 
      className="w-full 2xl:w-80 h-[230px] 2xl:h-[250px] shadow-md rounded-md relative"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            src={recipe?.image}
            alt={recipe?.label}
            title={recipe?.label}
            className="w-full h-full object-cover rounded-md"
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>
      </div>
      <span className="bg-green-600 px-2 py-1 rounded-md absolute top-3 right-2 font-semibold text-sm hover:bg-green-700">{recipe?.mealType}</span>
    </article>
  );
}
