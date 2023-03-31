import React from "react";
import { IFormProps } from "types/types";

const checkGenderInputs = (male: boolean, female: boolean) => {
  return male || female;
};

const checkNameInput = (str: string) => {
  return /([A-ZА-Я]{1}[a-zа-я]+)( [A-ZА-Я]{1}[a-zа-я]+)+/.test(str.trim());
};

const NAME_ERROR_MESSAGE = "Please enter your first and last name correctly!";
const GENDER_ERROR_MESSAGE = "Please choose one of the two";

class Form extends React.Component<IFormProps> {
  form = React.createRef<HTMLFormElement>();
  name = React.createRef<HTMLInputElement>();
  date = React.createRef<HTMLInputElement>();
  select = React.createRef<HTMLSelectElement>();
  male = React.createRef<HTMLInputElement>();
  female = React.createRef<HTMLInputElement>();
  fileInput = React.createRef<HTMLInputElement>();
  agree = React.createRef<HTMLInputElement>();

  constructor(props: IFormProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.validation()) {
      alert("Data sent!");
      this.form.current!.reset();
    }
  }

  validation = () => {
    const isName = checkNameInput(this.name.current!.value);
    const isGender = checkGenderInputs(
      this.male.current!.checked,
      this.female.current!.checked
    );
    this.props.updateErrors({
      nameError: !isName ? NAME_ERROR_MESSAGE : "",
      genderError: !isGender ? GENDER_ERROR_MESSAGE : "",
    });
    if (isName && isGender) return true;
    return false;
  };

  render() {
    return (
      <form
        className="flex flex-col py-4 bg-color5 md:px-9 px-2 gap-3 rounded max-w-md"
        onSubmit={(event) => this.handleSubmit(event)}
        ref={this.form}
      >
        <h1 className="text-color1 text-2xl text-center">
          Leave your contact details here
        </h1>
        <div>
          <h2 className="text-color1 text-lg">Name and surname</h2>
          <input
            className="border rounded px-1 text-color1"
            type="text"
            ref={this.name}
          />
          {this.props.prevState.nameError && (
            <p className="text-sm text-red-600">
              {this.props.prevState.nameError}
            </p>
          )}
        </div>
        <div>
          <h2 className="text-color1 text-lg">Date of birth</h2>
          <input
            className="border rounded px-1 text-color1"
            type="date"
            min="01-01-1900"
            pattern="\d{2}-\d{2}-\d{4}"
            ref={this.date}
          />
        </div>
        <div>
          <h2 className="text-color1 text-lg">Choose your country</h2>
          <select
            className="text-color1 border rounded"
            defaultValue="Belarus"
            ref={this.select}
          >
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Poland">Poland</option>
            <option value="Kazakhstan">Kazakhstan</option>
          </select>
        </div>
        <div>
          <h2 className="text-color1 text-lg">Your gender</h2>
          <label className="text-color1 flex items-center">
            Male
            <input
              className="ml-2"
              type="radio"
              name="Gender"
              value="Male"
              id="Male"
              ref={this.male}
            />
          </label>
          <label className="text-color1">
            Female
            <input
              className="ml-2"
              type="radio"
              name="Gender"
              value="Female"
              id="Female"
              ref={this.female}
            />
          </label>
          {this.props.prevState.genderError && (
            <p className="text-sm text-red-600">
              {this.props.prevState.genderError}
            </p>
          )}
        </div>
        <div>
          <h2 className="text-color1 text-lg">Profile picture</h2>
          <input type="file" accept="image/*" ref={this.fileInput} />
        </div>
        <div className="flex">
          <h2 className="text-color1 text-xs">
            I agree with the terms of the distribution of personal information
          </h2>
          <input
            className="rounded py-1 px-2 ml-2"
            type="checkbox"
            name="agree"
            value="true"
            id="agree"
            ref={this.agree}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
