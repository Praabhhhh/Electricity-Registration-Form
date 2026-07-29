using Microsoft.AspNetCore.Http;

namespace ElectricityAPI.Helpers
{
    public static class FileUploadHelper
    {
        public static async Task<string> UploadFileAsync(
            IFormFile? file,
            string folderPath)
        {
            if (file == null || file.Length == 0)
                return string.Empty;

            if (!Directory.Exists(folderPath))
            {
                Directory.CreateDirectory(folderPath);
            }

            string fileName = Guid.NewGuid() + "_" + file.FileName;

            string filePath = Path.Combine(folderPath, fileName);

            using var stream = new FileStream(filePath, FileMode.Create);

            await file.CopyToAsync(stream);

            return $"uploads/{fileName}";
        }
    }
}