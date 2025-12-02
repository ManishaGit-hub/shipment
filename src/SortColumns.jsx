import React from 'react'

const SortColumns = ({columns,sort,onSort}) => {

    const handleClick =(key)=>{
        onSort(key);
    }

    const getArrow =(key) =>{
        if(sort.key !== key) return "↕";
        return sort.direction === "asc" ? "▲":"▼";
    }

  return (
    <>
        {columns.map((col) => (
            <th key={col.key} onClick={()=>handleClick(col.key)} style={{cursor:"pointer",whiteSpace:"nowrap"}}>{col.label} {getArrow(col.key)}</th>
        ))}
    </>
  )
}

export default SortColumns