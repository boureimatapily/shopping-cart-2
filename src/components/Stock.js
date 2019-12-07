import React from 'react'

const Stock = (props) => {
  const { img, title, price, price2} = props;
  
  return (
    <div>
          <div className="col-lg-3">
            <div className="thumbnail">
              <button type="button" className="btn btn-primary btn-color btn-position">
                Free shipping
				      </button>
              <img src={img} alt="..." className="img-responsive" />
              <div className="caption">
                              <h5>{title}</h5>
                <hr />
                <p className="text-center">
                  $<b>{price}</b>.90
                      or <h5 className="text-center" id="price-color">{price2}</h5>
                </p>
                <p><a href="#" className="btn btn-primary btn-color btn-addC-size" role="button">Add To card</a></p>
              </div>
            </div>
          </div>
      
    </div>
  )
}

export default Stock
