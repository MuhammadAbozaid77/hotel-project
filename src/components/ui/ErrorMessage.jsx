import { MdOutlineErrorOutline } from "react-icons/md";
import Container from "./Container";

export default function ErrorMessage({ ErrorMessage }) {
  return (
    <Container>
      <div
        class="bg-white border-t-4 border-red-500 rounded-b  px-4 py-3 flex justify-start items-center  h-[300px] rounded shadow "
        role="alert"
      >
        <div class="flex items-center gap-3">
          <div class="py-1 text-red-600">
            <MdOutlineErrorOutline size={80} />
          </div>
          <div>
            <p class="text-[20px] font-semibold text-red-700">
              Something Went Error
            </p>
            <p class="font-semibold text-gray-700">
              Error Message : {ErrorMessage}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
