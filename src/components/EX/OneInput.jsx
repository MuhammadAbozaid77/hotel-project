import { useForm } from "react-hook-form";

export default function OneInput() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmitFunction = (e) => {
    console.log(e);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <label htmlFor="firstName"> First Name</label>
          <input
            type="text"
            // name="firstName"
            {...register("firstName", {
              required: "This Input Required",
              min: {
                value: 1,
                message: "",
              },
            })}
            id="firstName"
          />
          <span> {errors?.firstName?.message} </span>
        </div>
      </form>
    </>
  );
}
