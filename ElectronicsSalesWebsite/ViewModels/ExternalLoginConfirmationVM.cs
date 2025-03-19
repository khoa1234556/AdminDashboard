using System.ComponentModel.DataAnnotations;

namespace ElectronicsSalesWebsite.ViewModels
{
    public class ExternalLoginConfirmationVM
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}
