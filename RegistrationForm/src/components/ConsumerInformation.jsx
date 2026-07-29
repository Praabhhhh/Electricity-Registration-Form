import SectionCard from "./SectionCard";
import SelectField from "./SelectField";
import FileUpload from "./FileUpload";
import { useFormContext } from "../context/FormContext";


function ConsumerInformation() {

     const { formData, setFormData } = useFormContext();

     const handleConsumerType = (e) => {

    setFormData({

        ...formData,

        consumerInformation:{

            ...formData.consumerInformation,

            consumerType:e.target.value,

        }

    });

}

      const handlePhoto = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({

        ...formData,

        consumerInformation:{

            ...formData.consumerInformation,

            photo:file,

        }

    });

}

      const handleSignature = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData({

        ...formData,

        consumerInformation:{

            ...formData.consumerInformation,

            signature:file,

        }

    });

}

  console.log(formData.consumerInformation); 

  return (
    <SectionCard title="Consumer Information">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      
        <div>
        <SelectField

label="Consumer Type"

required

options={[

"Domestic",

"Commercial",

"Industrial"

]}

value={formData.consumerInformation.consumerType}

onChange={handleConsumerType}

/>
        </div>

    
        <div>

         <div className="space-y-5">

<FileUpload
  label="Consumer Photo"
  onChange={handlePhoto}
/>

<FileUpload

label="Consumer Signature"

onChange={handleSignature}

/>

</div>

        </div>

      </div>
    </SectionCard>
  );
}

export default ConsumerInformation;