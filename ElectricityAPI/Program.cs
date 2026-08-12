using ElectricityAPI.Data;
using ElectricityAPI.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add Controllers
builder.Services.AddControllers();


builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "https://electricity-registration-form-1.onrender.com"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseMySql(
//         builder.Configuration.GetConnectionString("DefaultConnection"),
//         ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
//     ));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 4, 8))
    ));

// Service Registration
builder.Services.AddScoped<IRegistrationService, RegistrationService>();

var app = builder.Build();


// using (var scope = app.Services.CreateScope())
// {
//     var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

//     db.Database.Migrate();
// }

// Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseCors("ReactPolicy");

// Static Files (wwwroot/uploads)
app.UseStaticFiles();

app.UseAuthorization();

// Controller Routes
app.MapControllers();


app.Run();