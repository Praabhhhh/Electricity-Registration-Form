using ElectricityAPI.Data;
using ElectricityAPI.DTOs;
using ElectricityAPI.Models;
using ElectricityAPI.Helpers;

namespace ElectricityAPI.Services
{
    public class RegistrationService : IRegistrationService
    {
        private readonly ApplicationDbContext _context;

        public RegistrationService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task SaveRegistrationAsync(RegistrationDTO dto)
        {
            Registration registration = new Registration();

            // Consumer Information
            registration.ConsumerType = dto.ConsumerInformation.ConsumerType;
           registration.PhotoPath =
await FileUploadHelper.UploadFileAsync(
dto.ConsumerInformation.Photo,
Path.Combine(Directory.GetCurrentDirectory(),"wwwroot","uploads")
);
           registration.SignaturePath =
await FileUploadHelper.UploadFileAsync(
dto.ConsumerInformation.Signature,
Path.Combine(Directory.GetCurrentDirectory(),"wwwroot","uploads")
);

            // Communication Address
            registration.PropertyNo = dto.CommunicationAddress.PropertyNo;
            registration.KhasraNo = dto.CommunicationAddress.KhasraNo;
            registration.BlockNo = dto.CommunicationAddress.BlockNo;
            registration.Floor = dto.CommunicationAddress.Floor;
            registration.PremisePortion = dto.CommunicationAddress.PremisePortion;
            registration.Sector = dto.CommunicationAddress.Sector;
            registration.Street = dto.CommunicationAddress.Street;
            registration.Area = dto.CommunicationAddress.Area;
            registration.Landmark = dto.CommunicationAddress.Landmark;
            registration.LandmarkDetails = dto.CommunicationAddress.LandmarkDetails;
            registration.City = dto.CommunicationAddress.City;
            registration.State = dto.CommunicationAddress.State;
            registration.PostalCode = dto.CommunicationAddress.PostalCode;

            // Supply Address
            registration.SameAsCommunication = dto.SupplyAddress.SameAsCommunication;
            registration.SupplyPropertyNo = dto.SupplyAddress.PropertyNo;
            registration.SupplyKhasraNo = dto.SupplyAddress.KhasraNo;
            registration.SupplyBlockNo = dto.SupplyAddress.BlockNo;
            registration.SupplyFloor = dto.SupplyAddress.Floor;
            registration.SupplyPremisePortion = dto.SupplyAddress.PremisePortion;
            registration.SupplySector = dto.SupplyAddress.Sector;
            registration.SupplyStreet = dto.SupplyAddress.Street;
            registration.SupplyArea = dto.SupplyAddress.Area;
            registration.SupplyLandmark = dto.SupplyAddress.Landmark;
            registration.SupplyLandmarkDetails = dto.SupplyAddress.LandmarkDetails;
            registration.SupplyCity = dto.SupplyAddress.City;
            registration.SupplyState = dto.SupplyAddress.State;
            registration.SupplyPostalCode = dto.SupplyAddress.PostalCode;
            registration.OpenRooftop = dto.SupplyAddress.OpenRooftop;
            registration.NearestHouseNo = dto.SupplyAddress.NearestHouseNo;

            // Connection Details
            registration.ConnectionType = dto.ConnectionDetails.ConnectionType;
            registration.TemporaryConnection = dto.ConnectionDetails.TemporaryConnection;
            registration.Purpose = dto.ConnectionDetails.Purpose;
            registration.Category = dto.ConnectionDetails.Category;
            registration.LoadKVA = dto.ConnectionDetails.LoadKVA;
            registration.LoadKW = dto.ConnectionDetails.LoadKW;
            registration.MeterType = dto.ConnectionDetails.MeterType;
            registration.AreaType = dto.ConnectionDetails.AreaType;
            registration.PremisesType = dto.ConnectionDetails.PremisesType;
            registration.BuildingType = dto.ConnectionDetails.BuildingType;

            // Documents
            registration.IdProofType = dto.Documents.IdProofType;
            registration.IdProofNumber = dto.Documents.IdProofNumber;
           registration.IdProofPath =
await FileUploadHelper.UploadFileAsync(
dto.Documents.IdProofFile,
Path.Combine(Directory.GetCurrentDirectory(),"wwwroot","uploads")
);
            registration.OwnershipProofType = dto.Documents.OwnershipProofType;
            registration.OwnershipProofPath =
await FileUploadHelper.UploadFileAsync(
dto.Documents.OwnershipProofFile,
Path.Combine(Directory.GetCurrentDirectory(),"wwwroot","uploads")
);

            // Compliance
            registration.LiftInstalled = dto.Compliance.LiftInstalled;
            registration.EBill = dto.Compliance.EBill;
            registration.Email = dto.Compliance.Email;
            registration.PurchaseMeter = dto.Compliance.PurchaseMeter;

            await _context.Registrations.AddAsync(registration);
            await _context.SaveChangesAsync();
        }
    }
}