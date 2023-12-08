using HospitalManagement.data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using HospitalManagementSystem;
namespace HospitalManagement.data
{

    public class HospitalDbContext : DbContext
    {
        string constr = Program.GetDbConnection();
        public DbSet<Hospital> HospitalAdmin { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(constr,new MySqlServerVersion(new Version(8, 0, 11)));
        }
    }

}