export type TypeButton = {
  type: 'button'|'submit';
  text: string;
  color?: string;
  onclick?: () => void;
  class?: string;
}