import { useFormContext } from "../context/FormContext";

function Preview() {
  const { formData } = useFormContext();

  return (
    <div className="bg-white rounded-lg shadow p-6">

      <h2 className="text-3xl font-bold text-center mb-8">
        Preview Form
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Consumer Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p><b>Consumer Type :</b> {formData.consumerInformation.consumerType}</p>

            <p><b>Photo :</b> {formData.consumerInformation.photo?.name}</p>

            <p><b>Signature :</b> {formData.consumerInformation.signature?.name}</p>

          </div>
        </div>



        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Communication Address
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p><b>Property No :</b> {formData.communicationAddress.propertyNo}</p>

            <p><b>Khasra No :</b> {formData.communicationAddress.khasraNo}</p>

            <p><b>Block No :</b> {formData.communicationAddress.blockNo}</p>

            <p><b>Floor :</b> {formData.communicationAddress.floor}</p>

            <p><b>Premise Portion :</b> {formData.communicationAddress.premisePortion}</p>

            <p><b>Sector :</b> {formData.communicationAddress.sector}</p>

            <p><b>Street :</b> {formData.communicationAddress.street}</p>

            <p><b>Area :</b> {formData.communicationAddress.area}</p>

            <p><b>Landmark :</b> {formData.communicationAddress.landmark}</p>

            <p><b>Landmark Details :</b> {formData.communicationAddress.landmarkDetails}</p>

            <p><b>City :</b> {formData.communicationAddress.city}</p>

            <p><b>State :</b> {formData.communicationAddress.state}</p>

            <p><b>Postal Code :</b> {formData.communicationAddress.postalCode}</p>

          </div>
        </div>



        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Supply Address
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p><b>Property No :</b> {formData.supplyAddress.propertyNo}</p>

            <p><b>Khasra No :</b> {formData.supplyAddress.khasraNo}</p>

            <p><b>Block No :</b> {formData.supplyAddress.blockNo}</p>

            <p><b>Floor :</b> {formData.supplyAddress.floor}</p>

            <p><b>Premise Portion :</b> {formData.supplyAddress.premisePortion}</p>

            <p><b>Sector :</b> {formData.supplyAddress.sector}</p>

            <p><b>Street :</b> {formData.supplyAddress.street}</p>

            <p><b>Area :</b> {formData.supplyAddress.area}</p>

            <p><b>Landmark :</b> {formData.supplyAddress.landmark}</p>

            <p><b>Landmark Details :</b> {formData.supplyAddress.landmarkDetails}</p>

            <p><b>City :</b> {formData.supplyAddress.city}</p>

            <p><b>State :</b> {formData.supplyAddress.state}</p>

            <p><b>Postal Code :</b> {formData.supplyAddress.postalCode}</p>

            <p><b>Open Rooftop :</b> {formData.supplyAddress.openRooftop}</p>

            <p><b>Nearest House No :</b> {formData.supplyAddress.nearestHouseNo}</p>

          </div>
        </div>



        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Connection Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p><b>Connection Type :</b> {formData.connectionDetails.connectionType}</p>

            <p><b>Temporary Connection :</b> {formData.connectionDetails.temporaryConnection}</p>

            <p><b>Purpose :</b> {formData.connectionDetails.purpose}</p>

            <p><b>Category :</b> {formData.connectionDetails.category}</p>

            <p><b>Load (KVA) :</b> {formData.connectionDetails.loadKVA}</p>

            <p><b>Load (KW) :</b> {formData.connectionDetails.loadKW}</p>

            <p><b>Meter Type :</b> {formData.connectionDetails.meterType}</p>

            <p><b>Area Type :</b> {formData.connectionDetails.areaType}</p>

            <p><b>Premises Type :</b> {formData.connectionDetails.premisesType}</p>

            <p><b>Building Type :</b> {formData.connectionDetails.buildingType}</p>

          </div>
        </div>



        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Documents
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p><b>ID Proof :</b> {formData.documents.idProofType}</p>

            <p><b>ID Number :</b> {formData.documents.idProofNumber}</p>

            <p><b>ID Proof File :</b> {formData.documents.idProofFile?.name}</p>

            <p><b>Ownership Proof :</b> {formData.documents.ownershipProofType}</p>

            <p><b>Ownership File :</b> {formData.documents.ownershipProofFile?.name}</p>

          </div>
        </div>



        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Compliance
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <p><b>Lift Installed :</b> {formData.compliance.liftInstalled}</p>

            <p><b>E-Bill :</b> {formData.compliance.eBill}</p>

            <p><b>Email :</b> {formData.compliance.email}</p>

            <p><b>Purchase Meter :</b> {formData.compliance.purchaseMeter}</p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Preview;