import React from 'react'
import { useState } from 'react'
import FilterSection from './FilterSection'
import GridVeiw from './GridVeiw'
import ListColVeiw from './ListColVeiw'
import SortingNav from './SortingNav'

const Products = () => {
  const[veiw,setVeiw]=useState('grid')
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-3 border">
          <FilterSection />
        </div>
        <div className="col-9 ">
          <div className="row row-cols-1">
            <div className="col border-bottom mb-2">
              <SortingNav setVeiw={setVeiw}/>
            </div>
            <div className="col">
              {veiw==='grid'?<GridVeiw/>:<div className='webkit'><ListColVeiw/></div>}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Products
