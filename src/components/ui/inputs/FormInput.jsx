export default function FormInput({ children, label, error }) {
  return (
    <>
      <div className="w-[100%] mb-3">
        <label
          htmlFor="cabinName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        {/* Children Input */}
        {children}
        <span className="text-red-600 text-[14px]">{error}</span>
      </div>
    </>
  );
}
