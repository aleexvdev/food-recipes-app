import IconArrowRight from "../../../assets/icons/IconArrowRight";
import { TypeButton } from "../../../types/typesComponents";

type ButtonFoodProps = {
  props: TypeButton;
}

export const ButtonFood = ({ props }: ButtonFoodProps) => {
  return (
    <button type={props.type} className="bg-orange-500 px-4 py-3 text-xl rounded-xl hover:bg-orange-700 flex items-center justify-center">{props.text} <IconArrowRight className="text-white font-semibold text-2xl ml-2" /></button>
  )
}
