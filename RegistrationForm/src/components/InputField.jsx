function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>

      <label className="block mb-2 text-sm font-medium">

        {label}

        {required && <span className="text-red-500">*</span>}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}

export default InputField;