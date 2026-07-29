using ElectricityAPI.DTOs;
using ElectricityAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ElectricityAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegistrationService _registrationService;

        public RegistrationController(IRegistrationService registrationService)
        {
            _registrationService = registrationService;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromForm] RegistrationDTO dto)
        {
            await _registrationService.SaveRegistrationAsync(dto);

            return Ok(new
            {
                success = true,
                message = "Registration Saved Successfully"
            });
        }
    }
}