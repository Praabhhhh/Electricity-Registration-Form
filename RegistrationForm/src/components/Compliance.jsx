import SectionCard from "./SectionCard";
import RadioGroup from "./RadioGroup";
import InputField from "./InputField";
import { useFormContext } from "../context/FormContext";

function Compliance() {

  const { formData, setFormData } = useFormContext();

const updateCompliance = (field, value) => {

  setFormData({

    ...formData,

    compliance: {

      ...formData.compliance,

      [field]: value,

    },

  });

};


console.log(formData.compliance);

  return (
    <SectionCard title="Compliance Checklist">


<RadioGroup
  label="Do you have Lift Installed?"
  options={["Yes", "No"]}
  name="liftInstalled"
  value={formData.compliance.liftInstalled}
  onChange={(e) =>
    updateCompliance("liftInstalled", e.target.value)
  }
/>

<RadioGroup
  label="Do you want E-Bill?"
  options={["Yes", "No"]}
  name="eBill"
  value={formData.compliance.eBill}
  onChange={(e) =>
    updateCompliance("eBill", e.target.value)
  }
/>


<InputField
  label="Email ID"
  placeholder="Enter Email"
  value={formData.compliance.email}
  onChange={(e) =>
    updateCompliance("email", e.target.value)
  }
/>

<RadioGroup
  label="Purchase CEA Approved Meter?"
  options={["Yes", "No"]}
  name="purchaseMeter"
  value={formData.compliance.purchaseMeter}
  onChange={(e) =>
    updateCompliance("purchaseMeter", e.target.value)
  }
/>
    </SectionCard>
  );
}

export default Compliance;