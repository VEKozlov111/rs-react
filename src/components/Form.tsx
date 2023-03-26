import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className="flex flex-col py-4 bg-color5 md:px-9 px-2 gap-3 rounded max-w-md">
        <h1 className="text-color1 text-2xl text-center">Leave your contact details here</h1>
        <div>
          <h2 className="text-color1 text-lg">Name and surname</h2>
          <input className="border rounded px-1 text-color1" type="text" />
        </div>
        <div>
          <h2 className="text-color1 text-lg">Date of birth</h2>
          <input className="border rounded px-1 text-color1" type="text" />
        </div>
        <div>
          <h2 className="text-color1 text-lg">Choose your country</h2>
          <select className="text-color1 border rounded"
            defaultValue="Belarus"
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
            />
          </label>
        </div>
        <div>
          <h2 className="text-color1 text-lg">Profile picture</h2>
          <input type="file" accept="image/*" />
        </div>
        <div className="flex">
          <h2 className="text-color1 text-xs">I agree with the terms of the distribution of personal information</h2>
          <input
            className="rounded py-1 px-2 ml-2"
            type="checkbox"
            name="favorite"
            value="true"
            id="favorite"
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    );
  }
}

export default Form;