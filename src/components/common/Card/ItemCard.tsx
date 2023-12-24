import { Hits } from "../../../types/types";

type ItemCardProps = {
  id: string | number; // Cambiado de 'key' a 'id'
  props: Hits;
}

export const ItemCard = ({ id, props }: ItemCardProps) => {
  const { recipe } = props;

  return (
    <article key={id} className="w-[350px] h-[480px] bg-orange-500/20 p-2 shadow-md rounded-md relative">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-4/5 flex flex-col items-center justify-center p-5">
          <img
            src={recipe?.image}
            alt={recipe?.label}
            title={recipe?.label}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full h-1/5 flex items-end justify-between px-4">
          <h1 className="text-xl font-bold text-gray-800">{recipe?.label}</h1>
          {recipe?.mealType && (
            <span className="bg-orange-500 text-white text-lg rounded-full px-2 py-1 font-medium absolute top-10 right-10">
              {recipe?.mealType}
            </span>
          )}
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center mt-2 px-4">
          <div className="flex items-start justify-start w-full gap-2">
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
