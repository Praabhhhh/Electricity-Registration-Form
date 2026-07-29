import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const initialFormData = {
  consumerInformation: {
    consumerType: "",
    photo: null,
    signature: null,
  },

  communicationAddress: {
    propertyNo: "",
    khasraNo: "",
    blockNo: "",
    floor: "",
    premisePortion: "",
    sector: "",
    street: "",
    area: "",
    landmark: "",
    landmarkDetails: "",
    city: "",
    state: "",
    postalCode: "",
  },

  supplyAddress: {
    sameAsCommunication: false,
    propertyNo: "",
    khasraNo: "",
    blockNo: "",
    floor: "",
    premisePortion: "",
    sector: "",
    street: "",
    area: "",
    landmark: "",
    landmarkDetails: "",
    city: "",
    state: "",
    postalCode: "",
    openRooftop: "",
    nearestHouseNo: "",
  },

  connectionDetails: {
    connectionType: "",
    temporaryConnection: "",
    purpose: "",
    category: "",
    loadKVA: "",
    loadKW: "",
    meterType: "",
    areaType: "",
    premisesType: "",
    buildingType: "",
  },

  documents: {
    idProofType: "",
    idProofNumber: "",
    idProofFile: null,
    ownershipProofType: "",
    ownershipProofFile: null,
  },

  compliance: {
    liftInstalled: "",
    eBill: "",
    email: "",
    purchaseMeter: "",
  },
};

export const FormProvider = ({ children }) => {

 const [formData, setFormData] = useState(initialFormData);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);