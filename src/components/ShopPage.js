import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'


const ShopPage = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-9">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
