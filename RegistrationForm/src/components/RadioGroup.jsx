function RadioGroup({
  label,
  options = [],
  name = "radio",
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">
        {label}
      </label>

      <div className="flex gap-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
            />

            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioGroup;