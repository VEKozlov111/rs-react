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

export interface Inputs {
  name: string;
  date: string;
  country: CountryEnum;
  gender: "male" | "female";
  file: Blob[];
  agree: string;
}

enum CountryEnum {
  Belarus = "Belarus",
  Russia = "Russia",
  Poland = "Poland",
  Kazakhstan = "Kazakhstan",
}

export interface IUser {
  id: number;
  name: string;
  date: string[];
  country: string;
  gender: "male" | "female";
  file: string;
  agree: boolean;
}

export interface IFormProps {
  addUser: (e: IUser[]) => void;
  users: IUser[];
}
