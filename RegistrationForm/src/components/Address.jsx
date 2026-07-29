import SectionCard from "./SectionCard";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";
import { useFormContext } from "../context/FormContext";

const Address = () => {
  const { formData, setFormData } = useFormContext();

  const updateCommunication = (field, value) => {

  setFormData({

    ...formData,

    communicationAddress: {

      ...formData.communicationAddress,

      [field]: value,

    },

  });

};

const handleSameAddress = (e) => {
  const isChecked = e.target.checked;

  setFormData({
    ...formData,

    supplyAddress: {
      ...formData.supplyAddress,
      ...(isChecked ? formData.communicationAddress : {}),
      sameAsCommunication: isChecked,
    },
  });
};

const updateSupply = (field, value) => {
  setFormData({
    ...formData,

    supplyAddress: {
      ...formData.supplyAddress,
      [field]: value,
    },
  });
};


console.log(formData.communicationAddress);
console.log(formData.supplyAddress);

  return (
    <SectionCard title="Address">

      {/* ---------------- Communication Address ---------------- */}

      <h2 className="text-lg font-semibold mb-5">
        Communication Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <InputField
  label="Property No."
  placeholder="Property Number"
  value={formData.communicationAddress.propertyNo}
  onChange={(e) =>
    updateCommunication("propertyNo", e.target.value)
  }
/>

       <InputField
  label="Khasra No."
  placeholder="Khasra Number"
  value={formData.communicationAddress.khasraNo}
  onChange={(e) =>
    updateCommunication("khasraNo", e.target.value)
  }
/>
       <InputField
  label="Block No."
  placeholder="Block Number"
  value={formData.communicationAddress.blockNo}
  onChange={(e) =>
    updateCommunication("blockNo", e.target.value)
  }
/>

        <SelectField
  label="Floor"
  options={["Ground", "1st", "2nd", "3rd", "4th", "5th"]}
  value={formData.communicationAddress.floor}
  onChange={(e) =>
    updateCommunication("floor", e.target.value)
  }
/>

        <SelectField
  label="Premise Portion"
  options={["Front", "Rear", "Left", "Right"]}
  value={formData.communicationAddress.premisePortion}
  onChange={(e) =>
    updateCommunication("premisePortion", e.target.value)
  }
/>

       <InputField
  label="Sector / Phase"
  placeholder="Sector / Phase / Mohalla"
  value={formData.communicationAddress.sector}
  onChange={(e) =>
    updateCommunication("sector", e.target.value)
  }
/>

        <InputField
  label="Street"
  placeholder="Street"
  value={formData.communicationAddress.street}
  onChange={(e) =>
    updateCommunication("street", e.target.value)
  }
/>

        <InputField
  label="Area / Colony"
  placeholder="Area / Colony"
  value={formData.communicationAddress.area}
  onChange={(e) =>
    updateCommunication("area", e.target.value)
  }
/>

        <InputField
  label="Landmark"
  placeholder="Landmark"
  value={formData.communicationAddress.landmark}
  onChange={(e) =>
    updateCommunication("landmark", e.target.value)
  }
/>

       <InputField
  label="Landmark Details"
  placeholder="Landmark Details"
  value={formData.communicationAddress.landmarkDetails}
  onChange={(e) =>
    updateCommunication("landmarkDetails", e.target.value)
  }
/>

       <InputField
  label="City"
  placeholder="City"
  value={formData.communicationAddress.city}
  onChange={(e) =>
    updateCommunication("city", e.target.value)
  }
/>

       <InputField
  label="State"
  placeholder="State"
  value={formData.communicationAddress.state}
  onChange={(e) =>
    updateCommunication("state", e.target.value)
  }
/>

       <InputField
  label="City Postal Code"
  placeholder="Pin Code"
  value={formData.communicationAddress.postalCode}
  onChange={(e) =>
    updateCommunication("postalCode", e.target.value)
  }
/>

      </div>

      <hr className="my-8" />

      {/* ---------------- Supply Address ---------------- */}

      <h2 className="text-lg font-semibold mb-5">
        Supply Address
      </h2>

      <div className="mb-6">

        <label className="flex items-center gap-2">

         <input
  type="checkbox"
  checked={formData.supplyAddress.sameAsCommunication}
  onChange={handleSameAddress}
/>

          <span>
            Is supply address same as communication address?
          </span>

        </label>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <InputField
  label="Property No."
  placeholder="Property Number"
  value={formData.supplyAddress.propertyNo}
  onChange={(e) =>
    updateSupply("propertyNo", e.target.value)
  }
/>

        <InputField
  label="Khasra No."
  placeholder="Khasra Number"
  value={formData.supplyAddress.khasraNo}
  onChange={(e) =>
    updateSupply("khasraNo", e.target.value)
  }
/>

        <InputField
  label="Block No."
  placeholder="Block Number"
  value={formData.supplyAddress.blockNo}
  onChange={(e) =>
    updateSupply("blockNo", e.target.value)
  }
/>

        <SelectField
  label="Floor"
  options={["Ground", "1st", "2nd", "3rd", "4th", "5th"]}
  value={formData.supplyAddress.floor}
  onChange={(e) =>
    updateSupply("floor", e.target.value)
  }
/>

        <SelectField
  label="Premise Portion"
  options={["Front", "Rear", "Left", "Right"]}
  value={formData.supplyAddress.premisePortion}
  onChange={(e) =>
    updateSupply("premisePortion", e.target.value)
  }
/>

        <InputField
  label="Sector / Phase"
  placeholder="Sector / Phase / Mohalla"
  value={formData.supplyAddress.sector}
  onChange={(e) =>
    updateSupply("sector", e.target.value)
  }
/>

       <InputField
  label="Street"
  placeholder="Street"
  value={formData.supplyAddress.street}
  onChange={(e) =>
    updateSupply("street", e.target.value)
  }
/>

       <InputField
  label="Area / Colony"
  placeholder="Area / Colony"
  value={formData.supplyAddress.area}
  onChange={(e) =>
    updateSupply("area", e.target.value)
  }
/>

        <InputField
  label="Landmark"
  placeholder="Landmark"
  value={formData.supplyAddress.landmark}
  onChange={(e) =>
    updateSupply("landmark", e.target.value)
  }
/>

        <InputField
  label="Landmark Details"
  placeholder="Landmark Details"
  value={formData.supplyAddress.landmarkDetails}
  onChange={(e) =>
    updateSupply("landmarkDetails", e.target.value)
  }
/>

        <InputField
  label="City"
  placeholder="City"
  value={formData.supplyAddress.city}
  onChange={(e) =>
    updateSupply("city", e.target.value)
  }
/>

       <InputField
  label="State"
  placeholder="State"
  value={formData.supplyAddress.state}
  onChange={(e) =>
    updateSupply("state", e.target.value)
  }
/>

        <InputField
  label="City Postal Code"
  placeholder="Pin Code"
  value={formData.supplyAddress.postalCode}
  onChange={(e) =>
    updateSupply("postalCode", e.target.value)
  }
/>

      </div>

      <div className="mt-8">

        <RadioGroup
  label="Do you have Open Rooftop Area?"
  options={["Yes", "No"]}
  name="openRooftop"
  value={formData.supplyAddress.openRooftop}
  onChange={(e) =>
    updateSupply("openRooftop", e.target.value)
  }
/>

      </div>

      <div className="mt-5">

        <InputField
  label="Nearest House No./CA No."
  placeholder="Nearest House No./CA No."
  value={formData.supplyAddress.nearestHouseNo}
  onChange={(e) =>
    updateSupply("nearestHouseNo", e.target.value)
  }
/>

      </div>

    </SectionCard>
  );
};

export default Address;