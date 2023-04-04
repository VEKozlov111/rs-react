import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "types/types";
import { IFormProps } from "types/types";
import { IUser } from "types/types";

function Form({ users, addUser }: IFormProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const user: IUser = {
      id: users.length ? users.length : 0,
      name: data.name,
      date: data.date.split("-").length === 3 ? data.date.split("-") : [],
      country: data.country,
      gender: data.gender,
      file: data.file[0]
        ? URL.createObjectURL(data.file[0])
        : "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
      agree: !!data.agree,
    };
    alert("Форма отправлена");
    addUser([...users, user]);
    reset();
  };

  return (
    <form
      className="flex flex-col py-4 bg-color5 md:px-9 px-2 gap-3 rounded max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-color1 text-2xl text-center">
        Leave your contact details here
      </h1>
      <div>
        <h2 className="text-color1 text-lg">Name and surname</h2>
        <input
          className="border rounded px-1 text-color1"
          type="text"
          {...register("name", {
            required: true,
            pattern: /([A-ZА-Я]{1}[a-zа-я]+)( [A-ZА-Я]{1}[a-zа-я]+)+/,
          })}
        />
        {errors?.name && (
          <p className="text-sm text-red-600">
            Please enter your first and last name correctly!
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
          {...register("date", { required: true })}
        />
        {errors?.date && (
          <p className="text-sm text-red-600">
            Please enter your date of birth!
          </p>
        )}
      </div>
      <div>
        <h2 className="text-color1 text-lg">Choose your country</h2>
        <select
          className="text-color1 border rounded"
          defaultValue="Belarus"
          {...register("country", { required: true })}
        >
          <option value="Belarus">Belarus</option>
          <option value="Russia">Russia</option>
          <option value="Poland">Poland</option>
          <option value="Kazakhstan">Kazakhstan</option>
        </select>
        {errors?.country && (
          <p className="text-sm text-red-600">
            Please choose your country!
          </p>
        )}
      </div>
      <div>
        <h2 className="text-color1 text-lg">Your gender</h2>
        <label className="text-color1 flex items-center">
          Male
          <input
            className="ml-2"
            type="radio"
            value="Male"
            id="Male"
            {...register("gender", { required: true })}
          />
        </label>
        <label className="text-color1">
          Female
          <input
            className="ml-2"
            type="radio"
            value="Female"
            id="Female"
            {...register("gender", { required: true })}
          />
        </label>
        {errors?.gender && (
          <p className="text-sm text-red-600">Please make a choise!</p>
        )}
      </div>
      <div>
        <h2 className="text-color1 text-lg">Profile picture</h2>
        <input type="file" accept="image/*" {...register("file", { required: true })} />
        {errors?.file && (
          <p className="text-sm text-red-600">
            Please choose your profile picture!
          </p>
        )}
      </div>
      <div>
        <div className="flex">
          <h2 className="text-color1 text-xs">
            I agree with the terms of the distribution of personal information
          </h2>
          <input
            className="rounded py-1 px-2 ml-2"
            type="checkbox"
            value="true"
            id="agree"
            {...register("agree", { required: true })}
          />
        </div>
        {errors?.agree && (
          <p className="text-sm text-red-600">Confirm your consent!</p>
        )}
      </div>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
}

export default Form;
