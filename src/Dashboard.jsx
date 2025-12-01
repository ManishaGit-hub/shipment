import React,{useState} from 'react'
import OverviewCards from './OverviewCards'
import SearchBar from './SearchBar'

const sampleShipments =[
  {id:'SHP001',product:'Iphone14',source:'Mumbai',destination:'Delhi',status:'In Transit',lastUpdated:'2025-11-28'},
  {id:'SHP002',product:'Iphone15',source:'Bangalore',destination:'Gujrat',status:'Delivered',lastUpdated:'2025-11-27'},
  {id:'SHP003',product:'Iphone16',source:'Rajasthan',destination:'Punjab',status:'Delayed',lastUpdated:'2025-11-29'},
  {id:'SHP004',product:'Iphone17',source:'Assam',destination:'Kerala',status:'In Transit',lastUpdated:'2025-11-30'},
  
]

const Dashboard = () => {
  const [shipments,setShipments] = useState(sampleShipments);
  const[searchText,setSearchText]=useState("");

  const filteredShipments = sampleShipments.filter(s => s.id.toLowerCase().includes(searchText.toLowerCase()) ||
                                                        s.product.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <>
    <div>
      <div className="container py-4">
        <h1 className="mb-3">Dashboard</h1>
      </div>
        <OverviewCards shipments={shipments}/>
      <div className="container mt-4">
        <h4 className="mb-3">Shipments</h4>
          <div className="table-responsive">
            <SearchBar value={searchText} onChange={setSearchText}/>
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Shipment ID</th>
                  <th>Product Name</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {filteredShipments.map((s)=>{
                  return (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.product}</td>
                      <td>{s.source}</td>
                      <td>{s.destination}</td>
                      <td>
                        <span className={s.status === 'Delivered'?'badge bg-success':s.status === 'In Transit'?'badge bg-info text-dark':'badge bg-danger'}>
                          {s.status}</span>
                      </td>
                      <td>{s.lastUpdated}</td>
                    </tr>
                  
                  )
                })}
                
              </tbody>
            </table>
          </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard