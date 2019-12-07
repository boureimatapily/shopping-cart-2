import React from 'react'
import ProductNumber from './ProductNumber'
import Stock from './Stock'
import OrderBy from './OrderBy'
import nana from '../images/adwoa.jpg'
import awal from '../images/awal.jpg'

const MainContent = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <ProductNumber />
          </div>
          <div className="col-lg-6 col-md-6">
            <OrderBy />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Stock img = {nana} title="Cat Tee Nana T-Shirt" price2="8x$1.21" price="12"/>
            <Stock img = {awal} title="at Tee Awal T-Shirt" price2="9x$1.21" price="13"/>
            <Stock img = {nana} title="Cat Tee ZAK T-Shirt" price2="10x$1.21" price="14"/>
            <Stock img = {awal} title="Cat Tee Nana Yaa T-Shirt" price2="11x$1.21" price="15"/>
            <Stock img = {nana} title="Cat Tee Richard T-Shirt" price2="12x$1.21" price="16"/>
            
          </div>   
        </div>
      </div>
    </div>
  )
}

export default MainContent
