import { useState, useEffect } from "react";
import API from "../services/api";
import { submitRegistration } from "../services/api";


import Stepper from "../components/Stepper";

import ConsumerInformation from "../components/ConsumerInformation";
import Address from "../components/Address";
import ConnectionDetails from "../components/ConnectionDetails";
import Documents from "../components/Documents";
import Compliance from "../components/Compliance";

import Preview from "./Preview";

import { useFormContext, initialFormData } from "../context/FormContext";

function Registration() {

  const [currentStep, setCurrentStep] = useState(1);

  const { formData, setFormData } = useFormContext();

  useEffect(() => {

    const draft = localStorage.getItem("electricityForm");

    if (draft) {

      setFormData(JSON.parse(draft));

    }

  }, []);

  const handleSaveDraft = () => {

    localStorage.setItem(

      "electricityForm",

      JSON.stringify(formData)

    );

    alert("Draft Saved Successfully");

  };

const handleSubmit = async () => {

  try {

    const result = await submitRegistration(formData);

    alert(result.message);

    localStorage.removeItem("electricityForm");

setFormData(initialFormData);

setCurrentStep(1);

  }

 catch (error) {
    console.error(error);

    if (error.response) {
        console.log(error.response.data);
        alert(JSON.stringify(error.response.data));
    } else {
        alert("Submission Failed");
    }
}

};

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
        Electricity Registration Form
      </h1>

      <Stepper currentStep={currentStep} />

      <div className="mt-8">

        {currentStep === 1 && <ConsumerInformation />}

        {currentStep === 2 && <Address />}

        {currentStep === 3 && <ConnectionDetails />}

        {currentStep === 4 && <Documents />}

        {currentStep === 5 && <Compliance />}

        {currentStep === 6 && <Preview />}

      </div>

      <div className="flex justify-between items-center mt-8">

        <button

          onClick={() => setCurrentStep(currentStep - 1)}

          disabled={currentStep === 1}

          className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"

        >

          Back

        </button>

        <div className="flex gap-3">

          <button

            onClick={handleSaveDraft}

            className="px-6 py-2 bg-yellow-500 text-white rounded-lg"

          >

            Save Draft

          </button>

          {currentStep < 6 ? (

            <button

              onClick={() => setCurrentStep(currentStep + 1)}

              className="px-6 py-2 bg-blue-600 text-white rounded-lg"

            >

              Next

            </button>

          ) : (

            <button

              onClick={handleSubmit}

              className="px-6 py-2 bg-green-600 text-white rounded-lg"

            >

              Submit

            </button>

          )}

        </div>

      </div>

    </div>

  );

}

export default Registration;