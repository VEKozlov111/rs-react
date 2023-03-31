import React from "react";
import Form from "components/Form";
import { IFormsState } from "types/types";
import { IErrorsUpdate } from "types/types";

class FormPage extends React.Component<object> {
  state: Readonly<IFormsState> = {
    genderError: "",
    nameError: "",
  };

  hendleUpdateErrors = (newErrors: IErrorsUpdate) => {
    this.setState((prev) => ({ ...prev, ...newErrors }));
  };
  render() {
    return (
      <div className="flex justify-center">
        <Form prevState={this.state} updateErrors={this.hendleUpdateErrors} />
      </div>
    );
  }
}

export default FormPage;
