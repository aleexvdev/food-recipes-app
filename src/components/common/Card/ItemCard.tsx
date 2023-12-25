import { Hits } from "../../../types/types";

type ItemCardProps = {
  id: string | number; 
  props: Hits;
}

export const ItemCard = ({ id, props }: ItemCardProps) => {
  const { recipe } = props;

  return (
    <article key={id} className="2xl:w-[350px] 2xl:h-[480px] lg:w-[280px] lg:h-[450px] bg-orange-500/20 2xl:p-2 lg:p-1 shadow-md rounded-md relative">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full 2xl:h-4/5 lg:h-[70%] flex flex-col items-center justify-center 2xl:p-5 lg:p-3">
          <img
            src={recipe?.image}
            alt={recipe?.label}
            title={recipe?.label}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full h-1/5 flex items-end justify-between px-4">
          <h1 className="2xl:text-xl lg:text-lg font-bold text-gray-800">{recipe?.label}</h1>
          {recipe?.mealType && (
            <span className="bg-orange-500 text-white 2xl:text-lg lg:text-sm rounded-full px-2 py-1 font-medium absolute 2xl:top-10 2xl:right-10 lg:top-6 lg:right-6">
              {recipe?.mealType}
            </span>
          )}
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center mt-2 px-4">
          <div className="flex flex-wrap items-start justify-start w-full gap-2">
            {recipe?.tags?.map((tag, index) => (
              index <= 2 && (
                <span key={index} className="bg-orange-700 text-white rounded-xl px-2 py-1 font-medium">
                  {tag}
                </span>
              )
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
