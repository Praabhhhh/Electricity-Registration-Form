import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5015/api",
});


const appendFormData = (data, obj, parentKey = "") => {
  for (const key in obj) {

    const value = obj[key];

   const cleanKey = key.trim();

const formattedKey =
    cleanKey.charAt(0).toUpperCase() +
    cleanKey.slice(1);

const formKey = parentKey
    ? `${parentKey}.${formattedKey}`
    : formattedKey;

    if (value instanceof File) {

      data.append(formKey, value);

    }

    else if (value && typeof value === "object") {

      appendFormData(
        data,
        value,
        formKey
      );

    }

    else {

      data.append(
        formKey,
        value ?? ""
      );

    }

  }
};


const buildFormData = (formData) => {

    const data = new FormData();

    appendFormData(data, formData);

    return data;

};


export const submitRegistration = async (formData) => {

  const data = buildFormData(formData);

  console.log([...data.entries()]);

  const response = await API.post(
    "/Registration",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export default API;