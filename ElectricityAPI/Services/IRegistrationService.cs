using ElectricityAPI.DTOs;

namespace ElectricityAPI.Services
{
    public interface IRegistrationService
    {
        Task SaveRegistrationAsync(RegistrationDTO dto);
    }
}