using ElectricityAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ElectricityAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
     public DbSet<Registration> Registrations { get; set; }   
    }
}