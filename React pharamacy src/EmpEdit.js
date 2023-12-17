import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/medicine/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.medicine_name);
            medicinechange(resp.medicine_catagory);
            expirarychange(resp.medicine_expirary);
            stockchange(resp.medicine_stock);
            ratechange(resp.medicine_rate);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[medicine_name,namechange]=useState("");
    const[medicine_catagory,medicinechange]=useState("");
    const[medicine_expirary, expirarychange]=useState("");
    const[medicine_stock,stockchange]=useState("");
    const[medicine_rate,ratechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={medicine_name,medicine_catagory,medicine_expirary,medicine_stock,medicine_rate,active};
      

      fetch("http://localhost:8000/medicine/"+empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div style={{backgroundImage:`url('https://t3.ftcdn.net/jpg/05/76/97/98/360_F_576979827_K4JZoVvx6MvJbt9NnSdTZICJP2E6SFe5.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}}>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Medicine Update</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Medicine Name</label>
                                        <input required value={medicine_name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {medicine_name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Medicine catagory</label>
                                        <input value={medicine_catagory} onChange={e=>medicinechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Medicine Expirary</label>
                                        <input value={medicine_expirary} onChange={e=>expirarychange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Medicine Stock</label>
                                        <input value={medicine_stock} onChange={e=>stockchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Medicine Rate</label>
                                        <input value={medicine_rate} onChange={e=>ratechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                

                                <div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Is Active</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EmpEdit;