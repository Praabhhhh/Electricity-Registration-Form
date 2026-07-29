function SelectField({
  label,
  options,
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

      <select
        value={value}
        onChange={onChange}
        className="w-full border rounded-md p-2"
      >

        <option value="">Select</option>

        {options.map((item) => (

          <option key={item} value={item}>

            {item}

          </option>

        ))}

      </select>

    </div>
  );
}

export default SelectField;