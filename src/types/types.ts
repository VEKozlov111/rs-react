export interface INavItemProps {
  title: string;
  to: string;
}
export interface ICard {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  thumbnail: string;
}
export interface IFormsState {
  nameError: string;
  genderError: string;
}

export type IErrorsUpdate = {
  nameError: string;
  genderError: string;
};

export interface IFormProps {
  updateErrors: (e: IErrorsUpdate) => void;
  prevState: IFormsState;
}
