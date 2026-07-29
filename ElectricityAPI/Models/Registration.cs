using System.ComponentModel.DataAnnotations;

namespace ElectricityAPI.Models
{
    public class Registration
    {
        [Key]
        public int Id { get; set; }

        
        // Consumer Information
        

        public string ConsumerType { get; set; } = string.Empty;

        public string? PhotoPath { get; set; }

        public string? SignaturePath { get; set; }

       
        // Communication Address
       

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

       
        // Supply Address
        

        public bool SameAsCommunication { get; set; }

        public string SupplyPropertyNo { get; set; } = string.Empty;

        public string SupplyKhasraNo { get; set; } = string.Empty;

        public string SupplyBlockNo { get; set; } = string.Empty;

        public string SupplyFloor { get; set; } = string.Empty;

        public string SupplyPremisePortion { get; set; } = string.Empty;

        public string SupplySector { get; set; } = string.Empty;

        public string SupplyStreet { get; set; } = string.Empty;

        public string SupplyArea { get; set; } = string.Empty;

        public string SupplyLandmark { get; set; } = string.Empty;

        public string SupplyLandmarkDetails { get; set; } = string.Empty;

        public string SupplyCity { get; set; } = string.Empty;

        public string SupplyState { get; set; } = string.Empty;

        public string SupplyPostalCode { get; set; } = string.Empty;

        public string OpenRooftop { get; set; } = string.Empty;

        public string NearestHouseNo { get; set; } = string.Empty;

       
        // Connection Details
        

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

        
        // Documents
       

        public string IdProofType { get; set; } = string.Empty;

        public string IdProofNumber { get; set; } = string.Empty;

        public string? IdProofPath { get; set; }

        public string OwnershipProofType { get; set; } = string.Empty;

        public string? OwnershipProofPath { get; set; }

        // Compliance
       

        public string LiftInstalled { get; set; } = string.Empty;

        public string EBill { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PurchaseMeter { get; set; } = string.Empty;

        // =========================

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}