using System.ComponentModel.DataAnnotations;

namespace ElectronicsSalesWebsite.ViewModels
{
    public class LoginVM
    {
        [Required]
        [EmailAddress]
        [Display(Name = "Email")]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Mật khẩu")]
        public string Password { get; set; }

        [Display(Name = "Nhớ đăng nhập?")]
        public bool RememberMe { get; set; }

        public string ReturnUrl { get; set; }
    }
}
