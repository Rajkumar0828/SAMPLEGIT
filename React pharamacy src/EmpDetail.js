import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/medicine/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div class="p-3 mb-2 bg-info text-dark">
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Medicine Details</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                     <h2>The Medicine name is : <b>{empdata.medicine_name}</b>  ({empdata.id})</h2>
                        <h3>Medicine Details</h3>
                        <h5>Medicine Catagory is : {empdata.medicine_catagory}</h5>
                        <h5>Medicine Expirary is : {empdata.medicine_expirary}</h5>
                        <h5>Medicine Stock is : {empdata.medicine_stock}</h5>
                        <h5>Medicine Rate is : {empdata.medicine_rate}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
        </div >
    );
}

export default EmpDetail;