import React,{useEffect,useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Style from './ShipmentDetailsPage.module.css';
import axios from 'axios';

const ShipmentDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [item,setItem]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    //fetch shipment by ID from server
    useEffect(()=>{
        const fetchShipment = async()=>{
            try{
                const {data}= await axios.get(`/shipments.json`); //fetching whole file
                const shipment=data.find(item => item.id === id);
                setItem(shipment);
                setLoading(false)
            }
            catch(err){
                setError("Failed to fetch shipment details");
                setLoading(false)
            }
        }
        fetchShipment();
    },[id]);

    if(loading) return <p className="text-center mt-4">Loading shipment...</p>
    if(error) return <p className="text-center text-danger">{error}</p>
    if(!item) return <h3 className="text-center mt-5">Shipment not found</h3>

            const shippingStages =["Ordered", "Packed", "Dispatched", "In Transit", "Delivered"];
            const currentStageIndex = shippingStages.indexOf(item.status);
            const filteredLogs = item.logs.filter(log =>
            shippingStages.indexOf(log.stage)<=currentStageIndex).slice(-5);

  return (
    <>
        <div className="container mt-4">
            <button className="btn btn-secondary mb-3" onClick={()=> navigate(-1)}>Back</button>
            <h2 className="mb-3">Shipment Details</h2>
            <div className="card p-4 shadow">
                <h4 className="mb-3">ID:{item.id}</h4>
                <p><strong>Product:</strong>{item.product}</p>
                <p><strong>Source:</strong>{item.source}</p>
                <p><strong>Destination:</strong>{item.destination}</p>
                <p><strong>Status:</strong><span className={`badge ms-2 ${item.status === 'Delivered' ? 'bg-success':item.status === 'In Transit' ? 'bg-info text-dark':'bg-danger'}`}>{item.status}</span></p>
            </div>
            <hr className='my-4'/>

            {/*image*/}
            <div className="text-center mb-4">
                <img src={item.image} alt={item.product} className="img-fluid rounded shadow" style={{maxWidth:"260px"}}/>
            </div>
            {/*Timeline*/}
            <h4 className="mb-3">Shipping Timeline</h4>
            <div className="d-flex justify-content-between mb-4">
                {["Ordered","Packed","Dispatched","In Transit","Delivered"].map((step,index)=>(
                    <div key={index}>
                        <div className={`${Style.timelineDot} ${item.status === step ? "text-primary":index<["Ordered","Packed","Dispatched","In Transit","Delivered"].indexOf(item.status)?"text-success":"text-secondary"}`}>
                            ●
                        </div>
                       <small className="fw-semibold">{step}</small>
                    </div>
                ))}
            </div>
             {/*Log Events*/}
            <h4 className="mt-3">Recent Updates</h4>
            <ul className="list-group mb-4">
                {filteredLogs.length > 0?(
                    filteredLogs.map((log,i)=>(
                        <li key={i} className="list-group-item">{log.date}---: <strong>{log.message}</strong></li>
                    ))
                ):(
                    <li className="list-group-item text-center text-muted">No updates available yet!</li>
                )}
            </ul>
            {/*Estimated Delivery*/}
            <div className="alert alert-info text-center fw-bold">
                Estimated Delivery : {item.estimatedDelivery}
            </div>
        </div>

    </>
  )
}

export default ShipmentDetailsPage