import React,{useState} from 'react'
import OverviewCards from './OverviewCards'
import SearchBar from './SearchBar'
import SortColumns from './SortColumns'
import Pagination from './Pagination'

const sampleShipments =[
  {id:'SHP001',product:'Iphone14',source:'Mumbai',destination:'Delhi',status:'In Transit',lastUpdated:'2025-11-28'},
  {id:'SHP002',product:'Iphone15',source:'Bangalore',destination:'Gujrat',status:'Delivered',lastUpdated:'2025-11-27'},
  {id:'SHP003',product:'Iphone15',source:'Rajasthan',destination:'Punjab',status:'Delayed',lastUpdated:'2025-11-29'},
  {id:'SHP004',product:'Iphone17',source:'Assam',destination:'Kerala',status:'In Transit',lastUpdated:'2025-11-30'},
  {id:'SHP005',product:'Iphone18',source:'Mumbai',destination:'Delhi',status:'In Transit',lastUpdated:'2025-12-01'},
  {id:'SHP006',product:'Iphone15',source:'Bangalore',destination:'Gujrat',status:'Delivered',lastUpdated:'2025-12-02'},
  {id:'SHP007',product:'phone17',source:'Rajasthan',destination:'Punjab',status:'Delayed',lastUpdated:'2025-11-28'},
  {id:'SHP008',product:'Vivo',source:'Assam',destination:'Kerala',status:'In Transit',lastUpdated:'2025-11-30'},
  {id:'SHP009',product:'Samsung',source:'Mumbai',destination:'Delhi',status:'In Transit',lastUpdated:'2025-10-28'},
  {id:'SHP010',product:'Readmi',source:'Bangalore',destination:'Gujrat',status:'Delivered',lastUpdated:'2025-10-27'},
  {id:'SHP011',product:'Nothing',source:'Rajasthan',destination:'Punjab',status:'Delayed',lastUpdated:'2025-09-29'},
  {id:'SHP012',product:'Nokia',source:'Assam',destination:'Kerala',status:'In Transit',lastUpdated:'2025-09-30'},
]

const Dashboard = () => {
  const [shipments,setShipments] = useState(sampleShipments);
  const[searchText,setSearchText]=useState("");
  const [sort,setSort]=useState({key:'',
                    direction:'asc'})
  const [currentPage,setCurrentPage] =useState(1);
  const itemsPerPage = 4;
  
  const handleSort = (columnKey) =>{
    setSort((prev)=>({
      key:columnKey,
      direction:prev.key === columnKey && prev.direction === "asc" ? "desc":"asc",
    }))
  }

  const filteredShipments = shipments.filter(s => s.id.toLowerCase().includes(searchText.toLowerCase()) ||
                                                        s.product.toLowerCase().includes(searchText.toLowerCase())).sort((a, b) => {
      if (!sort.key) return 0;
      const aValue = a[sort.key];
      const bValue = b[sort.key];
      if (aValue < bValue) return sort.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sort.direction === "asc" ? 1 : -1;
      return 0;
    });

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const ShipmentInEachPage = filteredShipments.slice(indexOfFirst,indexOfLast)

    const totalPages = Math.ceil(filteredShipments.length/itemsPerPage);
    const handlePageChange = (page) =>{
        setCurrentPage(page);
    }

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
                  <SortColumns columns={[{key:"id",label:"Shipment ID"},
                    {key:"product",label:"Product Name"}
                  ]} sort={sort} onSort = {handleSort}/>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {ShipmentInEachPage.map((s)=>{
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
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </table>
          </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard