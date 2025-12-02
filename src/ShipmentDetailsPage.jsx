import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { shipmentSampleItems } from './shipmentSampleItems'

const ShipmentDetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const item = shipmentSampleItems.find(s=>s.id === id);
    if(!item) return <h3 className="text-center mt-5">Shipment Not Found</h3>

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
        </div>
    </>
  )
}

export default ShipmentDetailsPage