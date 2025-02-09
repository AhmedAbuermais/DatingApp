using System.Threading.Tasks;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;

namespace API.Interfaces
{
    public interface IPhotoService
    {
         Task<ImageUploadResult> AddphotoAsync(IFormFile file);
         Task<DeletionResult> DeletePhotoAsync(string PublicId);
    }
}