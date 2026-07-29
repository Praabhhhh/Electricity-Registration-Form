import { useRef, useState } from "react";

function FileUpload({
  label,
  accept = "image/*",
  onChange,
}) {

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);


  const handleFileChange = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  setPreview(URL.createObjectURL(file));

  onChange(e);

};

  return (
    <div>

      <label className="block text-sm font-medium mb-2">
        {label}
      </label>

      <div className="border rounded-lg p-4 flex flex-col items-center">

        <div className="w-24 h-24 rounded border bg-gray-100 flex items-center justify-center overflow-hidden">

  {preview ? (

    <img
      src={preview}
      alt="Preview"
      className="w-full h-full object-cover"
    />

  ) : (

    <span className="text-gray-500 text-sm">
      Preview
    </span>

  )}

</div>

        <input
         ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />

        <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Upload File
       </button>

        <p className="text-xs text-gray-500 mt-2">
          Only jpg/png upto 500kb
        </p>

      </div>

    </div>
  );
}

export default FileUpload;