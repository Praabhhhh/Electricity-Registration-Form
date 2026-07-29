import SectionCard from "./SectionCard";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";
import { useFormContext } from "../context/FormContext";

function ConnectionDetails() {
  const { formData, setFormData } = useFormContext();

  const updateConnection = (field, value) => {
    setFormData({
      ...formData,

      connectionDetails: {
        ...formData.connectionDetails,
        [field]: value,
      },
    });
  };

  console.log(formData.connectionDetails);


  return (
    <SectionCard title="Connection Details">

      <div className="mb-6">
        <RadioGroup
          label="Connection Type"
          options={["Permanent", "Temporary"]}
          name="connectionType"
          value={formData.connectionDetails.connectionType}
          onChange={(e) =>
            updateConnection("connectionType", e.target.value)
          }
        />
      </div>

      <div className="mb-6">
        <RadioGroup
          label="Temporary connection exists at site?"
          options={["Yes", "No"]}
          name="temporaryConnection"
          value={formData.connectionDetails.temporaryConnection}
          onChange={(e) =>
            updateConnection("temporaryConnection", e.target.value)
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

        <InputField
          label="Purpose of Supply"
          placeholder="Purpose of Supply"
          value={formData.connectionDetails.purpose}
          onChange={(e) =>
            updateConnection("purpose", e.target.value)
          }
        />

        <SelectField
          label="Category of Electricity Usage"
          options={["Domestic", "Commercial", "Industrial"]}
          value={formData.connectionDetails.category}
          onChange={(e) =>
            updateConnection("category", e.target.value)
          }
        />

        <InputField
          label="Load (KVA) (1 KVA = 0.93 KW)"
          placeholder="1"
          value={formData.connectionDetails.loadKVA}
          onChange={(e) =>
            updateConnection("loadKVA", e.target.value)
          }
        />

        <InputField
          label="Load (KW)"
          placeholder="0.93"
          value={formData.connectionDetails.loadKW}
          onChange={(e) =>
            updateConnection("loadKW", e.target.value)
          }
        />

        <RadioGroup
          label="Meter Type"
          options={["Single Phase", "Three Phase"]}
          name="meterType"
          value={formData.connectionDetails.meterType}
          onChange={(e) =>
            updateConnection("meterType", e.target.value)
          }
        />

        <SelectField
          label="Type of Area"
          options={["Urban", "Rural"]}
          value={formData.connectionDetails.areaType}
          onChange={(e) =>
            updateConnection("areaType", e.target.value)
          }
        />

        <SelectField
          label="Type of Premises"
          options={["Residential", "Commercial", "Industrial"]}
          value={formData.connectionDetails.premisesType}
          onChange={(e) =>
            updateConnection("premisesType", e.target.value)
          }
        />

        <SelectField
          label="Type of Use / Building"
          options={["House", "Flat", "Shop", "Office"]}
          value={formData.connectionDetails.buildingType}
          onChange={(e) =>
            updateConnection("buildingType", e.target.value)
          }
        />

      </div>

    </SectionCard>
  );
}

export default ConnectionDetails;