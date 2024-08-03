export default function Login() {
  return (
    <>
      <div className="">
        <form action="" className="w-[500px] border p-5 rounded">
          <div className="flex justify-center flex-col">
            <label htmlFor=""> Email </label>
            <input type="email" className="p-2 border rounded" />
          </div>
          <div className="flex justify-center flex-col">
            <label htmlFor=""> Password </label>
            <input type="password" className="p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="py-2 px-5 bg-blue-500 mt-5 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
