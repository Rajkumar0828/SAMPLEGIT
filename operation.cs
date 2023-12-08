using HospitalManagement.data;
using HospitalManagementSystem;
namespace HospitalManagementOperation

 {
 
 public interface IHospitalService
{
    void AddPatient(int p_id, string p_name,int p_age,string p_disease);
    void ViewAllPatient(int p_id);
    void UpdatePatient(int p_id, string p_name,int p_age,string p_disease);
    void DeletePatient(int p_id);
}

public class HospitalService : IHospitalService
{
    private readonly HospitalDbContext _dbContext;

    public HospitalService(HospitalDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void AddPatient(int p_id, string p_name,int p_age,string p_disease)
    {
        var hospital = new Hospital
        {
            Patient_Id = p_id,
            Patient_Name= p_name,
            Patient_Age = p_age,
            Patient_Disease =p_disease
            
        };

        _dbContext.HospitalAdmin.Add(hospital);
        _dbContext.SaveChanges();

        Console.WriteLine("Patient added successfully!");
    }

    public void ViewAllPatient(int p_id)
    {
        var hospital = _dbContext.HospitalAdmin.Find(p_id);

        if (hospital != null)
        {
            Console.WriteLine($"patient Id: {hospital.Patient_Id}, patient_name: {hospital.Patient_Name}, patient Age: {hospital.Patient_Age}, patient Disease: {hospital.Patient_Disease}");
        }
        else
        {
            Console.WriteLine("Patient not found.");
        }
    }

    public void UpdatePatient(int p_id, string p_name,int p_age,string p_disease)
    {
        var patientToUpdate = _dbContext.HospitalAdmin.Find(p_id);

        if (patientToUpdate != null)
        {
            patientToUpdate.Patient_Id = p_id;
            patientToUpdate.Patient_Name = p_name;
            patientToUpdate.Patient_Age = p_age;

            _dbContext.SaveChanges();
            Console.WriteLine("patient updated successfully!");
        }
        else
        {
            Console.WriteLine("patient not found.");
        }
    }

    public void DeletePatient(int p_id)
    {
        var patientToDelete = _dbContext.HospitalAdmin.Find(p_id);

        if (patientToDelete != null)
        {
            _dbContext.HospitalAdmin.Remove(patientToDelete);
            _dbContext.SaveChanges();
            Console.WriteLine("patient deleted successfully!");
        }
        else
        {
            Console.WriteLine("patient not found.");
        }
    }
}
 }






























