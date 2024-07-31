import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../utils/RegexValidation";

export default function Dashbord() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      textInput: "",
      emailInput: "",
      numberInput: "",
      passwordInput: "",
      rePpasswordInput: "",
    },
  });
  // const {onBlur , name , ref , onChange ,pattern } = register("username")

  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex justify-center items-start flex-col gap-2">
          <label htmlFor="text" className="">
            Text
          </label>
          <input
            type="text"
            id="text"
            name="textInput"
            className="p-2 bg-white border rounded-md w-[400px] shadow"
            {...register(
              "textInput",
              {
                required: {
                  value: true,
                  message: "This Input Required",
                },
              }
              // { pattern: "" }
            )}
          />
          {errors?.textInput && (
            <span className="text-red-500"> {errors?.textInput?.message} </span>
          )}
        </div>

        <div className="mb-5 flex justify-center items-start flex-col gap-2">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="emailInput"
            className="p-2 bg-white border rounded-md w-[400px] shadow"
            {...register(
              "emailInput",
              {
                required: {
                  value: true,
                  message: "This Input Required",
                },
              },
              {
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid Email. Try To Write another Email",
                },
                // validate: (fieldValue) => {
                //   return fieldValue !== "" || "Enter a Different Email Address";
                // },
              }
            )}
          />
          {errors?.emailInput && (
            <span className="text-red-500">{errors?.emailInput?.message}</span>
          )}
        </div>

        <div className="mb-5 flex justify-center items-start flex-col gap-2">
          <label htmlFor="number" className="">
            Number
          </label>
          <input
            type="number"
            id="number"
            name="numberInput"
            className="p-2 bg-white border rounded-md w-[400px] shadow"
            {...register("numberInput", {
              required: {
                value: true,
                message: "This Input Required",
              },
            })}
          />
          {errors?.numberInput && (
            <span className="text-red-500">{errors?.numberInput?.message}</span>
          )}
        </div>

        <div className="mb-5 flex justify-center items-start flex-col gap-2">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="passwordInput"
            className="p-2 bg-white border rounded-md w-[400px] shadow"
            {...register("passwordInput", {
              required: {
                value: true,
                message: "This Input Required",
              },
            })}
          />

          {errors?.passwordInput && (
            <span className="text-red-500">
              {errors?.passwordInput?.message}
            </span>
          )}
        </div>

        <div className="mb-5 flex justify-center items-start flex-col gap-2">
          <label htmlFor="password" className="">
            RePassword
          </label>
          <input
            type="password"
            id="password"
            name="rePpasswordInput"
            className="p-2 bg-white border rounded-md w-[400px] shadow"
            {...register("rePpasswordInput", {
              required: {
                value: true,
                message: "This Input Required",
              },
            })}
          />

          {errors?.rePpasswordInput && (
            <span className="text-red-500">
              {errors?.rePpasswordInput?.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="border p-2 w-[100px] shadow bg-blue-400 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
