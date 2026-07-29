const steps = [

"Consumer",

"Address",

"Connection",

"Documents",

"Compliance",

"Preview"

];

function Stepper({ currentStep }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center justify-between min-w-[700px]">

        {steps.map((step, index) => {

          const stepNumber = index + 1;

          return (

            <div key={index} className="flex items-center flex-1">

              <div className="flex flex-col items-center">

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all

                  ${
                    currentStep > stepNumber
                      ? "bg-green-500"

                      : currentStep === stepNumber
                      ? "bg-blue-600"

                      : "bg-gray-300"
                  }`}
                >

                  {currentStep > stepNumber ? "✓" : stepNumber}

                </div>

                <p className="mt-2 text-sm font-medium">
                  {step}
                </p>

              </div>

              {index !== steps.length - 1 && (

                <div
                  className={`flex-1 h-1 mx-3 rounded

                  ${
                    currentStep > stepNumber
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>

              )}

            </div>

          );

        })}

      </div>
    </div>
  );
}

export default Stepper;