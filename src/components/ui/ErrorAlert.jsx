export default function ErrorAlert({ children }) {
  return (
    <>
      <div
        class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <span class="font-medium">Error</span> {children}
      </div>
    </>
  );
}
