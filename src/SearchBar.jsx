import React from 'react'

const SearchBar = ({value,onChange}) => {
  return (
    <>
        <div className="d-flex justify-content-end mb-3">
            <input type="text" className="form-control" placeholder="Search shipments..." style={{width:"250px"}} value={value} onChange={(e)=>onChange(e.target.value)} />
        </div>
    </>
  )
}

export default SearchBar