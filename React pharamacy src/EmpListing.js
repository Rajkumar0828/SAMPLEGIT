import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/medicine/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/medicine").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div style={{backgroundImage:`url('https://t3.ftcdn.net/jpg/05/76/97/98/360_F_576979827_K4JZoVvx6MvJbt9NnSdTZICJP2E6SFe5.jpg')`,backgroundSize:'cover',backgroundPosition:'center'}} >
        <div class="p-3 mb-2 text-dark" >
        <div className="container bg-warning ">
            <div className="card">
                <div className="card-title">
                    <h2>MEDICINE CREDENTIALS</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn " style={{"textAlign":"left"}}>
                        <Link to="employee/create"  className="btn btn-success" >Add Medicine</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>MEDICINE ID</td>
                                <td>MEDICINE NAME</td>
                                <td>MEDICINE CATAGORY</td>
                                <td>MEDICINE EXPIRARY</td>
                                <td>MEDICINE STOCK</td>
                                <td>MEDICINE RATE</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.medicine_name}</td>
                                        <td>{item.medicine_catagory}</td>
                                        <td>{item.medicine_expirary}</td>
                                        <td>{item.medicine_stock}</td>
                                        <td>{item.medicine_rate}</td>
                                        

                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-outline-success rounded-top mx-2">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-outline-danger rounded-top mx-2">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-outline-primary  rounded-top mx-2">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default EmpListing;