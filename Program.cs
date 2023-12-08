using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using HospitalManagement.data;
using HospitalManagementOperation;
namespace HospitalManagementSystem
{
   public class Program
    {
        
        public static string GetDbConnection()
        {
            var builder = new ConfigurationBuilder()
                                .SetBasePath(Directory.GetCurrentDirectory())
                                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
 
            string? strConnection = builder.Build().GetConnectionString("DefaultConnection");
 
            return strConnection;
        }
        private readonly IHospitalService _HospitalService;

    public Program(IHospitalService HospitalService)
    {
        _HospitalService = HospitalService;
    }
    public void Run()
    {
        Console.WriteLine("Welcome to the patient Management System!");

        bool isRunning = true;
        while (isRunning)
        {
            Console.WriteLine("\nMenu:");
            Console.WriteLine("1. Add patient");
            Console.WriteLine("2. View all patient");
            Console.WriteLine("3. Update Patient");
            Console.WriteLine("4. Delete Patient");
            Console.WriteLine("5. Exit");

            Console.Write("Enter your choice: ");
            int choice;
            if (int.TryParse(Console.ReadLine(), out choice))
            {
                switch (choice)
                {
                    case 1:
                        AddPatient();
                        break;
                    case 2:
                        ViewAllPatient();
                        break;
                    case 3:
                        UpdatePatient();
                        break;
                    case 4:
                        DeletePatient();
                        break;
                    case 5:
                        isRunning = false;
                        break;
                    default:
                        Console.WriteLine("Invalid choice. Please try again.");
                        break;
                }
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a number.");
            }
        }
    }

    private void AddPatient()
    {
        Console.WriteLine("\nEnter Patient details:");

        Console.Write("Enter Patient p_Id: ");
        int p_id = Convert.ToInt32(Console.ReadLine()) ;

        Console.Write("Enter Patient Name: ");
        string p_name = Console.ReadLine();


        Console.Write("Enter Patient Age: ");
        int p_age;
        while (!int.TryParse(Console.ReadLine(), out p_age))
        {
            Console.WriteLine("Invalid input. Please enter a valid age.");
        }

        Console.Write("Enter Patient Disease: ");
        string p_disease = Console.ReadLine();


        _HospitalService.AddPatient(p_id, p_name, p_age,p_disease);
    }

    private void ViewAllPatient()
    {
        Console.Write("Enter Patient ID to view details: ");
        if (int.TryParse(Console.ReadLine(), out int p_id))
        {
            _HospitalService.ViewAllPatient(p_id);
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter a valid ID.");
        }
    }

    private void UpdatePatient()
    {
        Console.Write("Enter Patient ID to update: ");
        if (int.TryParse(Console.ReadLine(), out int p_id))
        {
            Console.WriteLine("\nEnter updated Patient details:");

            Console.Write("Enter Patient p_Id: ");
            int p_Id = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Patient Name: ");
            string p_name = Console.ReadLine();

            Console.Write("Enter Patient Year: ");
            int p_age;
            while (!int.TryParse(Console.ReadLine(), out p_age))
            {
                Console.WriteLine("Invalid input. Please enter a valid year.");
            }
             Console.Write("Enter Patient Name: ");
            string p_disease = Console.ReadLine();

            _HospitalService.UpdatePatient(p_id, p_name, p_age,p_disease);
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter a valid ID.");
        }
    }

    private void DeletePatient()
    {
        Console.Write("Enter Patient ID to delete: ");
        if (int.TryParse(Console.ReadLine(), out int p_id))
        {
            _HospitalService.DeletePatient(p_id);
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter a valid ID.");
        }
    }

    static void Main(string[] args)
    {
        var dbContext = new HospitalDbContext();
        var hospitalService = new HospitalService(dbContext);
        var program = new Program(hospitalService);

        program.Run();
    }
        
    }
}
