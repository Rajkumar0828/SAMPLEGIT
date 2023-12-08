using System.ComponentModel.DataAnnotations;

namespace HospitalManagement.data
{
     public class Hospital
    {
        [Key]
        public int Patient_Id { get; set; }
        public string? Patient_Name { get; set; }
        public int Patient_Age { get; set; }
        public string? Patient_Disease { get; set; }
    }
}