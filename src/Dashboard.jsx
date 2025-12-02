import React,{useState} from 'react'
import OverviewCards from './OverviewCards'
import SearchBar from './SearchBar'
import SortColumns from './SortColumns'
import Pagination from './Pagination'
import { useNavigate } from 'react-router-dom'
import {sampleShipments} from './sampleShipments'

const Dashboard = () => {
  const navigate = useNavigate();
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
                    <tr key={s.id} style={{cursor:"pointer"}} onClick={()=>navigate(`/shipment/${s.id}`)}>
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
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
          </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard