import React from 'react'

const OverviewCards = ({shipments = []}) => {

    const total = shipments.length;
    const inTransit = shipments.filter(s=>s.status === "In Transit").length;
    const delivered = shipments.filter(s=>s.status === "Delivered").length;
    const delayed = shipments.filter(s=>s.status === "Delayed").length;

    const cardData =[
        {title:'Total Shipments', value:total,bg:'bg-primary',text:'text-white'},
        {title:'Shipments In Transit', value:inTransit,bg:'bg-info',text:'text-dark'},
        {title:'Delivered Shipments', value:delivered,bg:'bg-success',text:'text-white'},
        {title:'Delayed Shipments', value:delayed,bg:'bg-danger',text:'text-white'},]

  return (
    <>
        <div className='container my-4'>
            <div className='row g-3'>{cardData.map((c)=>{
                return (<div key={c.title} className='col-12 col-sm-6 col-lg-3'>
                    <div className={`card ${c.bg} ${c.text} h-100 shadow-sm`}>
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div>
                                <h6>{c.title}</h6>
                                <h2>{c.value}</h2>
                            </div>
                            <small className='mt-3 opacity-75'>Updated just now</small>
                        </div>
                    </div>
                </div>)
            })}

            </div>
        </div>
    </>
  )
}

export default OverviewCards