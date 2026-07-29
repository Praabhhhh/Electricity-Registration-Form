import SectionCard from "./SectionCard";
import SelectField from "./SelectField";
import InputField from "./InputField";
import FileUpload from "./FileUpload";
import { useFormContext } from "../context/FormContext";

function Documents() {

  const { formData, setFormData } = useFormContext();

const updateDocuments = (field, value) => {

  setFormData({

    ...formData,

    documents: {

      ...formData.documents,

      [field]: value,

    },

  });

};

    console.log(formData.documents);

  return (
    <SectionCard title="Important Documents">
            <div className="bg-red-50 border border-red-300 rounded-md p-4 mb-6">

  <h3 className="font-semibold text-red-600 mb-2">
    Important Note :
  </h3>

  <ul className="list-disc ml-5 text-sm text-red-600 space-y-1">

    <li>Ownership proof should be uploaded in PDF format.</li>

    <li>ID Proof should be uploaded in PDF format.</li>

    <li>Ownership proof size upto 25 MB.</li>

    <li>Other documents maximum size 5 MB.</li>

  </ul>

</div>
 
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<SelectField
  label="ID Proof Type"
  options={[
    "Aadhaar Card",
    "PAN Card",
    "Driving License",
    "Passport",
    "Voter ID",
  ]}
  value={formData.documents.idProofType}
  onChange={(e) =>
    updateDocuments("idProofType", e.target.value)
  }
/>

<InputField
  label="ID Proof Number"
  placeholder="Enter ID Number"
  value={formData.documents.idProofNumber}
  onChange={(e) =>
    updateDocuments("idProofNumber", e.target.value)
  }
/>

<FileUpload
  label="Upload ID Proof"
  onChange={(e) =>
    updateDocuments(
      "idProofFile",
      e.target.files[0]
    )
  }
/>

</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

<SelectField
  label="Ownership Proof"
  options={[
    "Sale Deed",
    "Registry",
    "Rent Agreement",
    "Lease Deed",
  ]}
  value={formData.documents.ownershipProofType}
  onChange={(e) =>
    updateDocuments(
      "ownershipProofType",
      e.target.value
    )
  }
/>

<FileUpload
  label="Upload Ownership Proof"
  onChange={(e) =>
    updateDocuments(
      "ownershipProofFile",
      e.target.files[0]
    )
  }
/>

</div>


    </SectionCard>
  );
}

export default Documents;