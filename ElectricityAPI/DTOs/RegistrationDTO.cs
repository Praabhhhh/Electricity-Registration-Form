using Microsoft.AspNetCore.Http;

namespace ElectricityAPI.DTOs
{
    public class RegistrationDTO
    {
        public ConsumerInformationDTO ConsumerInformation { get; set; } = new();

        public CommunicationAddressDTO CommunicationAddress { get; set; } = new();

        public SupplyAddressDTO SupplyAddress { get; set; } = new();

        public ConnectionDetailsDTO ConnectionDetails { get; set; } = new();

        public DocumentsDTO Documents { get; set; } = new();

        public ComplianceDTO Compliance { get; set; } = new();
    }

    public class ConsumerInformationDTO
    {
        public string ConsumerType { get; set; } = string.Empty;

        public IFormFile? Photo { get; set; }

        public IFormFile? Signature { get; set; }
    }

    public class CommunicationAddressDTO
    {
        public string PropertyNo { get; set; } = string.Empty;
        public string KhasraNo { get; set; } = string.Empty;
        public string BlockNo { get; set; } = string.Empty;
        public string Floor { get; set; } = string.Empty;
        public string PremisePortion { get; set; } = string.Empty;
        public string Sector { get; set; } = string.Empty;
        public string Street { get; set; } = string.Empty;
        public string Area { get; set; } = string.Empty;
        public string Landmark { get; set; } = string.Empty;
        public string LandmarkDetails { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
    }

    public class SupplyAddressDTO : CommunicationAddressDTO
    {
        public bool SameAsCommunication { get; set; }

        public string OpenRooftop { get; set; } = string.Empty;

        public string NearestHouseNo { get; set; } = string.Empty;
    }

    public class ConnectionDetailsDTO
    {
        public string ConnectionType { get; set; } = string.Empty;
        public string TemporaryConnection { get; set; } = string.Empty;
        public string Purpose { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string LoadKVA { get; set; } = string.Empty;
        public string LoadKW { get; set; } = string.Empty;
        public string MeterType { get; set; } = string.Empty;
        public string AreaType { get; set; } = string.Empty;
        public string PremisesType { get; set; } = string.Empty;
        public string BuildingType { get; set; } = string.Empty;
    }

    public class DocumentsDTO
    {
        public string IdProofType { get; set; } = string.Empty;
        public string IdProofNumber { get; set; } = string.Empty;

        public IFormFile? IdProofFile { get; set; }

        public string OwnershipProofType { get; set; } = string.Empty;

        public IFormFile? OwnershipProofFile { get; set; }
    }

    public class ComplianceDTO
    {
        public string LiftInstalled { get; set; } = string.Empty;

        public string EBill { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PurchaseMeter { get; set; } = string.Empty;
    }
}