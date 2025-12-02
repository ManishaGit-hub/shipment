import React from 'react'

const Pagination = ({currentPage,totalPages,onPageChange}) => {
    const pageNumbers = [];
    
    for(let i=1;i<=totalPages;i++){
        pageNumbers.push(i);
    }

  return (
    <>
        <div className='text-center mt-3'>
            <button className="btn btn-primary btn-sm me-2" onClick={()=>onPageChange(currentPage-1)} disabled={currentPage === 1}>
                Previous
            </button>
            {pageNumbers.map((num) => (
                <button key={num} className={`btn btn-sm me-2 ${currentPage === num ? "btn-dark":"btn-outline-dark"}`} onClick={()=> onPageChange(num)}>
                    {num}</button>
              ))}  
              <button className="btn btn-primary btn-sm me-2" onClick={()=>onPageChange(currentPage+1)} disabled={currentPage === totalPages}>Next</button>    
            
        </div>
    </>
  )
}

export default Pagination