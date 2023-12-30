import { TypeButton } from "../../../types/typesComponents";

type ButtonFoodProps = {
  props: TypeButton;
}

export const ButtonFood = ({ props }: ButtonFoodProps) => {

  const classBtn = (props.class === undefined) ? "bg-green-600 text-white px-5 py-3 text-xl rounded-xl hover:bg-green-700 flex items-center justify-center" : props.class;

  return (
    <button type={props.type} className={classBtn}>{props.text}</button>
  )
}
