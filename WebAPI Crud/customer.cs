using System.ComponentModel.DataAnnotations;

namespace APICrudServer.Data
{
    public class Customer
    {
         [Key]
         public int Id { get; set; }

         public string FirstName { get; set; }=String.Empty;

         public string LastName { get; set; }=String.Empty;

        public string PhoneNo { get; set; }=String.Empty;

        public string EmailId { get; set; }=String.Empty;
    }
}