import React,{useState} from 'react'
import OverviewCards from './OverviewCards'

const sampleShipments =[
  {id:'SHP001',product:'Iphone14',source:'Mumbai',destination:'Delhi',status:'In Transit',lastUpdated:'2025-11-28'},
  {id:'SHP002',product:'Iphone15',source:'Bangalore',destination:'Gujrat',status:'Delivered',lastUpdated:'2025-11-27'},
  {id:'SHP003',product:'Iphone16',source:'Rajasthan',destination:'Punjab',status:'Delayed',lastUpdated:'2025-11-29'},
  {id:'SHP004',product:'Iphone17',source:'Assam',destination:'Kerala',status:'In Transit',lastUpdated:'2025-11-30'},
  
]

const Dashboard = () => {
  const [shipments,setShipments] = useState(sampleShipments);
  return (
    <>
    <div>
      <div className="container py-4">
        <h1 className="mb-3">Dashboard</h1>
      </div>
        <OverviewCards shipments={shipments}/>
        
    </div>
    </>
  )
}

export default Dashboard