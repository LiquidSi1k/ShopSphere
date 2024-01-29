const FormInput = ({ label, ...otherProps }) => {
  const { value } = otherProps;
  return (
    <div className="flex items-center justify-center w-96 m-6 ">
      <div className="relative w-full ">
        <input
          {...otherProps}
          className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full"
        />
        <label
          className={`absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all text-gray-500 ${
            value ? " -top-4" : ""
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormInput;
