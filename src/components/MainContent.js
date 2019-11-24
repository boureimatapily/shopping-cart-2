import React from 'react'
import ProductNumber from './ProductNumber'
import Stock from './Stock'
import OrderBy from './OrderBy'
import nana from '../images/adwoa.jpg'

const MainContent = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ProductNumber />
          </div>
          <div className="col-lg-6">
            <OrderBy />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Stock img = {nana}/>
            <Stock img = {nana}/>
            <Stock img = {nana}/>
            <Stock img = {nana}/>
            <Stock img = {nana}/>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default MainContent
