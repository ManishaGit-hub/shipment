import React from 'react'
import { useParams } from 'react-router-dom'

const ShipmentDetailsPage = () => {
    const {id} = useParams();
  return (
    <>
        <div>
            <h2>Shipment Details for {id}</h2>
        </div>
    </>
  )
}

export default ShipmentDetailsPage