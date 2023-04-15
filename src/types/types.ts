export interface INavItemProps {
  title: string;
  to: string;
}
export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
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
export interface IPageCard {
  info: {
    count: number;
    pages: number;
    next: string | null;
  };
  results: ICard[];
}
